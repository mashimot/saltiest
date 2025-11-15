import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[sumBeEqualsTo]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SumBeEqualsToDirective,
      multi: true
    }
  ]
})
export class SumBeEqualsToDirective {
  @Input() sumBeEqualsTo;

  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    if (typeof control.value != 'undefined' && control.value != null) {
      const lines = control.value.trim().split('\n');

      for (let i = 0; i < lines.length; i++) {
        let sum = 0;
        const line = lines[i].replace(/\s+/g, ' ').trim();
        if (line != '') {
          const currentValueArr = line.split(' ');
          if (currentValueArr.length > 0) {
            for (var j = 0; j < currentValueArr.length; j++) {
              if (currentValueArr[j].trim() != '') {
                const num = parseInt(currentValueArr[j]);
                sum += num;
              }
            }
            if (parseInt(this.sumBeEqualsTo) != sum) {
              return {
                isSumInvalid: true,
                sumBeEqualsTo: this.sumBeEqualsTo
              };
            }
          }
        }
      }
    }
    return null;
  }
}
