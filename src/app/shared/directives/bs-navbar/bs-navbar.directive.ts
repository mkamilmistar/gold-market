import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBsNavbar]'
})
export class BsNavbarDirective {

  
  @HostBinding('class')
  get applyStyles(): string {
   return `navbar navbar-expand-lg navbar-light bg-transparent sticky-top`
  }


}
