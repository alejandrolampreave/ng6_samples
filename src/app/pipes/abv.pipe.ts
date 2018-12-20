import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abv'
})
export class AbvPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args === 'º') {
      return value + args;
    } else if (args === '%') {
      return value + args;
    }
     return '##Error in pipe##' + value + args;
  }
}
