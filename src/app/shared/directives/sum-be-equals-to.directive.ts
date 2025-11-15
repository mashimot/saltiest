import { Directive, Input } from "@angular/core";
import {
  Validator,
  AbstractControl,
  NG_VALIDATORS,
  ValidatorFn,
  ValidationErrors,
} from "@angular/forms";

@Directive({
  selector: "[sumBeEqualsTo]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SumBeEqualsToDirective,
      multi: true,
    },
  ],
})
export class SumBeEqualsToDirective {
  @Input() sumBeEqualsTo;

  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    if (typeof control.value != "undefined" && control.value != null) {
      let lines = control.value.trim().split("\n");

      for (let i = 0; i < lines.length; i++) {
        let sum = 0;
        let line = lines[i].replace(/\s+/g, " ").trim();
        if (line != "") {
          let currentValueArr = line.split(" ");
          if (currentValueArr.length > 0) {
            for (var j = 0; j < currentValueArr.length; j++) {
              if (currentValueArr[j].trim() != "") {
                let num = parseInt(currentValueArr[j]);
                sum += num;
              }
            }
            if (parseInt(this.sumBeEqualsTo) != sum) {
              return {
                isSumInvalid: true,
                sumBeEqualsTo: this.sumBeEqualsTo,
              };
            }
          }
        }
      }
    }
    return null;
  }
}
