import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective implements OnInit{

  // WAY-2
  private element!: ElementRef;
  constructor( element:ElementRef) {


    // WAY-1
    // element.nativeElement.style.backgroundColor = 'red';
    // element.nativeElement.style.color = 'black';

    // WAY-2
    this.element = element;
   }

  //  WAY-2
   ngOnInit(){
    this.element.nativeElement.style.backgroundColor = 'red';
    this.element.nativeElement.style.color = 'black';
    this.element.nativeElement.style.textAlign = 'center';
   }

}
