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
  @Input() color?: 'primary' | 'secondary';
  @Input() warn?: boolean;

  get buttonClass(): any {
    return {
      'app-button': true,
      'warn-button': this.warn,
      'primary-button': !this.warn && this.color === 'primary',
      'secondary-button': !this.warn && this.color === 'secondary'
    }
  }
}
