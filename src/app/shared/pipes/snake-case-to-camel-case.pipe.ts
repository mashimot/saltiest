import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snakeCaseToCamelCase',
})
export class SnakeCaseToCamelCasePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (typeof value != 'undefined') {
      if (value.trim() != '') {
        let newString = value
          .replace(/_(\w)/g, function (m) {
            return m.toUpperCase();
          })
          .replace(/_/g, '');

        return (newString.charAt(0).toUpperCase() + newString.slice(1)).trim();
      }
    }

    return '';
  }
}
