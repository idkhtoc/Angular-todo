import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string, length: number): string {
    return value.length <= length ? value : value.slice(0, length) + '...';
  }

}
