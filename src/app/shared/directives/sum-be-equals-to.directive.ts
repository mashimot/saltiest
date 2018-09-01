import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidatorFn, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[sumBeEqualsTo]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: SumBeEqualsToDirective,
    multi: true
  }]
})
export class SumBeEqualsToDirective {
  @Input() sumBeEqualsTo;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    let sum = 0;
    if (control.value) {
      var arrValues = control.value.trim().replace(/ +/g, ' ').split(' ');

      if (arrValues.length > 0) {
        for (var i = 0; i < arrValues.length; i++) {
          var num = parseInt(arrValues[i]);
          sum += num;
        }
      }
      return (parseInt(this.sumBeEqualsTo) === sum) ? null : { 'isSumInvalid': true, 'sumBeEqualsTo': this.sumBeEqualsTo };
    }
  }
}
