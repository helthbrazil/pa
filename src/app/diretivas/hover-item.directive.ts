import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pmmgHoverItem]'
})
export class HoverItemDirective {

  corOriginal: string;

  constructor(private el: ElementRef) {
    this.corOriginal = this.el.nativeElement.style.color;
  }

  @HostListener('mouseover') onHover() {
    // this.el.nativeElement.style.backgroundColor = '#f5f5f5';
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.backgroundColor = this.corOriginal;
  }

}
