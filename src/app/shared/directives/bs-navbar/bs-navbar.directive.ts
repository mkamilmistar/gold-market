import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBsNavbar]'
})
export class BsNavbarDirective {

  
  @HostBinding('class')
  get applyStyles(): string {
   return `navbar navbar-light navbar-expand-lg bg-light sticky-top`
  }


}
