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

  get buttonClass(): string[] {
    let returnString = ['app-button'];
    
    if (this.warn) {
      returnString.push('warn-button');
    } else {
      if (this.color === 'primary') {
        returnString.push('primary-button');
      }
      if (this.color === 'secondary') {
        returnString.push('secondary-button');
      }
    }

    return returnString;
  }
}
