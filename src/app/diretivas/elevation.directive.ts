import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pmmgElevation]'
})
export class ElevationDirective {

  constructor(private el: ElementRef) {

  }

  @HostListener('mouseover') onHover() {
    this.el.nativeElement.classList.add('mat-elevation-z4');
  }

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.classList.remove('mat-elevation-z4');
  }

}
