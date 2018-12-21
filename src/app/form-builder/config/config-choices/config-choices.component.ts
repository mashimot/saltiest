import { Component, OnInit, Input, Output } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

interface Html {
    category?: string;
    tag: string;
    label?: string;
    src?: string;
    data?: string;
    elements?: Array<{ text: string, value: string }>;
}

interface Table {
    columnName?: string;
    isPrimaryKey?: boolean;
    type?: string;
    nullable?: boolean;
    size?: string;
}

interface Content {
    html?: Html;
    table?: Table; //optional
}

@Component({
    selector: 'app-config-choices',
    templateUrl: './config-choices.component.html',
    styleUrls: ['./config-choices.component.css']
})
export class ConfigChoicesComponent implements OnInit {
    @Input() parentFormGroup;

    text: string = '';
    sortType: string;
    sortReverse: boolean;
    subs = new Subscription();
    html: any;
    
    constructor(
        private dragulaService: DragulaService,
        private fb: FormBuilder
    ) {
        dragulaService.createGroup('sortableElements', {
            moves: (el, container, handle) => {
                return handle.classList.contains('element-handle');
            }
        });
    }

    ngOnInit() {
        this.subs.add(this.dragulaService.dropModel('sortableElements').subscribe(
          ({ sourceModel, targetModel, item }) => {
                this.elements.controls = sourceModel;
                this.text = this.elementToString();
            }
        ));
        this.html = this.parentFormGroup.controls.html;
    }

    ngOnChanges() {
        this.text = this.elementToString();
    }

    ngOnDestroy() {
        this.dragulaService.destroy('sortableElements');
    }

    elementChanged(): void {
        this.text = this.elementToString();        
    }

    addElement(): void {
        this.elements.push(this.getElement());
    }

    private getElement(text: string = '', value: string = '') : object {
        return this.fb.group({
            'text': [text, [
                Validators.required
            ]],
            'value': [value, [
                Validators.required
            ]]
        });
    }

    public stringToElement(): void{
      if (this.text.length > 0) {
            let string = this.text.split('\n');
            let cloneElements = JSON.parse(JSON.stringify(this.elements.value));

            for (let i = 0; i < string.length; i++) {
                let str = string[i];
                let firstMatch = str;
                let secondMatch = '';
                if(str.indexOf('|') !== -1){
                    let match = str.split('|');
                    firstMatch = match[0];
                    secondMatch = str.substring(firstMatch.length + 1); //return '' if '|' was not found
                }
                let text  = (typeof firstMatch  !== 'undefined')? firstMatch: '';
                let value = (typeof secondMatch !== 'undefined') ? secondMatch : '';

                this.elements.removeAt(i);
                if (typeof this.elements.controls[i] === 'undefined') {
                    this.elements.push(this.getElement(text, value));
                } else {
                    this.elements.controls[i].patchValue({
                        text: text,
                        value: value
                    });
                }
            }
        } else {
            while (this.elements.length !== 0) {
                this.elements.removeAt(0);
            }
        }
    }

    public removeContent($index: number) {
        this.elements.removeAt($index);
        this.text = this.elementToString();
    }

    public orderBy(type){
        if(this.sortType !== type){
            this.sortReverse = true;
        }
        this.sortReverse = !this.sortReverse;
        this.sortType    = type;
    }

    public cloneThis(name){
        let elementsLength = this.elements.value.length;
        if(elementsLength > 0){
            let cloneThisObjectName = (name === 'value')? 'text' : 'value';
            for(let i = 0; i < elementsLength; i++){
                this.elements.value[i][name] = this.elements.value[i][cloneThisObjectName];
            }
            this.text = this.elementToString();
            this.stringToElement();
        }
    }

    public elementToString(): string {
        let string = '';
        //fire the `valueChanges` manually
        this.elements.updateValueAndValidity({ onlySelf: false, emitEvent: true });
        let e = this.elements.value;

        if(typeof e !== 'undefined'){
            if (e.length > 0){
                for (let i = 0; i < e.length; i++){
                    let str = e[i];
                    let pipe = (str.value === '')? '' : '|';
                    let element = {
                        text: typeof str.text !== 'undefined'? str.text : '',
                        value: typeof str.value !== 'undefined'? str.value : '',
                    };

                    string += (element.text + pipe + element.value) + (i === e.length - 1 ? '' : "\n");
                }
            } 
        }
        return string;
    }

    public getField(field: string, index: number) {
        return this.elements.controls[index].get(field);
    }

    get elements() {
        return this.parentFormGroup.get('html.elements');
    }

}
