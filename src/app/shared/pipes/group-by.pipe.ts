import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {
  transform(collection: any, property: string): any {
    const newCollection = collection.reduce((previous, currentValue) => {
      const c = this.resolve(property, currentValue);

      if (previous[c]) {
        previous[c].push(currentValue);
      } else {
        previous[c] = [currentValue];
      }
      return previous;
    }, {});

    return Object.keys(newCollection).map(key => {
      return {
        key: key,
        value: newCollection[key]
      };
    });
  }
  resolve(path, obj = self, separator = '.') {
    var properties = Array.isArray(path) ? path : path.split(separator);
    return properties.reduce((prev, curr) => prev && prev[curr], obj);
  }
}
