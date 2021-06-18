import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})

export class CapitalizePipe implements PipeTransform {

  transform(value: any): string {
    let split = value.toLowerCase().split(' ')
    for (let i = 0; i < split.length; i++) {
      split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
      
    }
    return split.join(' ');
  }

}
