import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as id from 'dayjs/locale/id'

@Pipe({
  name: 'navtime'
})
export class NavTimePipe implements PipeTransform {

  transform(displayFormat: string): unknown {
    
    const date = dayjs(new Date).locale(id).format(displayFormat)

    return `${date}`;
  }

}
