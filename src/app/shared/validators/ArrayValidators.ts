import { AbstractControl, FormArray, ValidatorFn } from '@angular/forms';

export class ArrayValidators {
  // max length
  public static maxLength(max: number): ValidatorFn | any {
    return (control: AbstractControl[]) => {
      if (!(control instanceof FormArray)) return;
      return control.length > max ? { arrayMaxLength: true } : null;
    };
  }

  // min length
  public static minLength(min: number): ValidatorFn | any {
    return (control: AbstractControl[]) => {
      if (!(control instanceof FormArray)) return;

      return control.length < min ? { arrayMinLength: true } : null;
    };
  }
}
