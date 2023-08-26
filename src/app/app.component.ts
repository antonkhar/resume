import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {}

  @HostListener('document:click', ['$event'])
  onClick(event: any) {
    const target = event.target as HTMLAnchorElement;
    if (target.classList.contains('smooth-scroll')) {
      const hash = target.getAttribute('href');
      if (hash && hash.startsWith('#')) {
        event.preventDefault();
        this.scrollTo(hash);
      }
    }
  }

  private scrollTo(target: string) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
