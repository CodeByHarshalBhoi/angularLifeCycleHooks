import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderer2]'
})
export class Renderer2Directive implements OnInit{

  private element!:ElementRef;
  private renderer!:Renderer2
  constructor(element:ElementRef, renderer:Renderer2) {
    this.element = element
    this.renderer = renderer
   }

  ngOnInit(){
      this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'black');
      this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
  }
}
