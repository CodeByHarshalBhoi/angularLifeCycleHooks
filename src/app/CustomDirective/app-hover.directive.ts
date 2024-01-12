import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHover]'
})
export class AppHoverDirective {


  constructor(private element:ElementRef, private renderer:Renderer2) { }

  @HostBinding ('style.backgroundColor')backgroundColor:string='black';
  @HostBinding ('style.border')border:string='white' ;
  @HostBinding ('style.color')textColor:string='white';
  @HostListener('mouseenter')OnMouseEnter(){
      this.backgroundColor = 'white';
      this.textColor = 'black';
  }

  @HostListener('mouseout') OnMouseOut(){
    this.backgroundColor='black'
    this.textColor = 'white '
  }
}
