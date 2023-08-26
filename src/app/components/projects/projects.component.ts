import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor(private route: ActivatedRoute, private router: Router) {}

  private container: HTMLElement | null = null;

  private isHovered = false;
  private mouseX = 0;
  private mouseY = 0;

  onMouseMove(event: MouseEvent) {
    if (!this.isHovered) {
      this.isHovered = true;
      this.container = event.currentTarget as HTMLElement;
    }

    if (!this.container) return;

    const containerRect = this.container.getBoundingClientRect();
    this.mouseX = event.clientX - containerRect.left;
    this.mouseY = event.clientY - containerRect.top;
    this.updateImageTransform();
  }

  onMouseLeave() {
    this.isHovered = false;
    if (this.container) {
      this.container.style.transform = 'none';
    }
  }

  private updateImageTransform() {
    if (!this.container) return;

    const containerWidth = this.container.offsetWidth;
    const containerHeight = this.container.offsetHeight;
    const normalizedX = (this.mouseX - containerWidth / 2) / containerWidth;
    const normalizedY = (this.mouseY - containerHeight / 2) / containerHeight;

    const rotationX = normalizedY * 20; // Угол наклона по вертикали
    const rotationY = normalizedX * -20; // Угол наклона по горизонтали

    this.container.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  }
}
