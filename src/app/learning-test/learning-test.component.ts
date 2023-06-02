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

  get buttonClass(): string {
    let returnString = 'app-button';
    
    if (this.warn) {
      returnString += ' warn-button';
    } else {
      if (this.color === 'primary') {
        returnString += ' primary-button';
      }
      if (this.color === 'secondary') {
        returnString += ' secondary-button';
      }
    }

    return returnString;
  }
}
