import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  constructor(e1: ElementRef) {
    e1.nativeElement.style.fontWeight = 'bold';
   }

}
