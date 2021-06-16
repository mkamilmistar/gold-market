import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appBsNavbar]'
})
export class BsNavbarDirective {

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset <= 80) {
      element.classList.add('bg-transparent');
    } else {
      element.classList.add('bg-light');
      element.classList.remove('bg-transparent');
    }
  } 

}
