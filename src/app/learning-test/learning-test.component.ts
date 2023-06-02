import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-learning-test',
//   templateUrl: './learning-test.component.html',
//   styleUrls: ['./learning-test.component.css']
// })
@Component({
  selector: 'app-button',
  template: `<button [ngClass]="buttonClass">Hello</button>`
})

export class LearningTestComponent {
  @Input() active: boolean = true;

  get buttonClass(): string {
    if (this.active) {
      return 'app-button button-active';
    } else{
      return 'app-button';
    }
  }
}
