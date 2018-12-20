import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformation'
})
export class TransformationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + args;
  }

}
