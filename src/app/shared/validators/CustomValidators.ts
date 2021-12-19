import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
	public static sumBeEqualsTo(sumBeEqualsTo: number | string) {
		return (control: AbstractControl): ValidationErrors | null => {
            if (typeof control.value != 'undefined' && control.value != null) {
                let lines = control.value.trim().split("\n");
                sumBeEqualsTo = typeof sumBeEqualsTo == 'string'
                    ? parseInt(sumBeEqualsTo)
                    : sumBeEqualsTo;
                for(let i = 0; i < lines.length; i++){
                    let sum = 0;
                    let line = lines[i].replace(/\s+/g, ' ').trim();
                    if(line != ''){
                        let currentValueArr = line.split(' ');
                        if (currentValueArr.length > 0) {
                            for (var j = 0; j < currentValueArr.length; j++) {
                                if(currentValueArr[j].trim() != ''){
                                    let num = parseInt(currentValueArr[j]);
                                    sum += num;
                                }
                            }
                            if(sumBeEqualsTo != sum){
                                return { 
                                    'isSumInvalid': true, 
                                    'sumBeEqualsTo': sumBeEqualsTo 
                                };
                            } 
                        }	
                    }
                }
            }
            return null
		}
	}
}