import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  red: number = 0;
  green: number = 0;
  blue: number = 0;

  updateRed(event: Event) {
    this.red = +(<HTMLInputElement>event.target).value;
  }

  updateGreen(event: Event) {
    this.green = +(<HTMLInputElement>event.target).value;
  }

  updateBlue(event: Event) {
    this.blue = +(<HTMLInputElement>event.target).value;
  }
}
