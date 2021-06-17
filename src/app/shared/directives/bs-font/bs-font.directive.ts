import { Directive, HostBinding, Input } from '@angular/core';

enum ColorStyle {
  default = '',
  white = 'text-white',
  black = 'text-black',
  red = 'text-danger',
  green = 'text-success',
  yellow = 'text-warning',
  blue = 'text-primary',
  gold = 'text-gold'
}


@Directive({
  selector: '[appBsFont]'
})
export class BsFontDirective {

  @Input() fontColor: 'default' | 'white' | 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'gold' = 'default';
  @HostBinding('class')
  get applyStyles(): string {
    const defaultTextColor: ColorStyle = ColorStyle[this.fontColor];
    return `${defaultTextColor}`
  }


}
