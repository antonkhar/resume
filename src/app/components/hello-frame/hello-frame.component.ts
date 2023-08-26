import { Component, ElementRef} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-hello-frame',
  templateUrl: './hello-frame.component.html',
  styleUrls: ['./hello-frame.component.scss'],
  animations: [
    trigger('fadeInFromLeft', [
      state('void', style({ transform: 'translateX(-100%)', opacity: 0 })), // начальное состояние до инициализации
      state('*', style({ transform: 'translateX(0)', opacity: 1 })), // конечное состояние после инициализации
      transition('void => *', [animate('700ms ease-out')]), // анимация с состояния "void" до конечного состояния
    ]),
  ],
})
export class HelloFrameComponent {

  constructor(private el: ElementRef, private route: ActivatedRoute, private router: Router) {}

  scrollTo(target: string) {
    const element = this.el.nativeElement.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
