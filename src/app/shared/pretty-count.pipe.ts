import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyCount'
})
export class PrettyCountPipe implements PipeTransform {

  transform(value: number, singular: string): string {
    if (value === 0) {
      return `no ${singular}s`;
    }
    if (value === 1) {
      return `1 ${singular}`;
    }
    return `${value} ${singular}s`;

  }

}