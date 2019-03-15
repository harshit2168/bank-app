import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[fieldsetDesign]'
})
export class FieldsetDesignDirective {

  constructor(element: ElementRef) { 
    element.nativeElement.style.color="crimson";
    element.nativeElement.style.width="500px";
    element.nativeElement.style.margin="100px auto";

  }

}
