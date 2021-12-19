import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, ValidatorFn, AbstractControl, FormControl } from '@angular/forms';
import { DBOperation } from 'src/app/shared/enum';
import { ContentService } from 'src/app/shared/services/content.service';
import { ContentChoiceItemService } from 'src/app/shared/services/content-choice-item.service';
import { ActivatedRoute } from '@angular/router';
import { DragulaService } from 'ng2-dragula';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Content } from 'src/app/_core/model';
import { tap } from 'rxjs/operators';

// Array Validators
export class ArrayValidators {

    // max length
    public static maxLength(max: number): ValidatorFn | any {
        return (control: AbstractControl[]) => {
            if (!(control instanceof FormArray)) return;
            return control.length > max
            ? { arrayMaxLength: true }
            : null;
        }
    }

    // min length
    public static minLength(min: number): ValidatorFn | any {
        return (control: AbstractControl[]) => {
            if (!(control instanceof FormArray)) return;
            
            return control.length < min
                ? { arrayMinLength: true }
                : null;
        }
    }
}


@Component({
	selector: 'app-config-choice-form',
	templateUrl: './config-choice-form.component.html',
	styleUrls: ['./config-choice-form.component.css']
})
export class ConfigChoiceFormComponent implements OnInit {
	choiceForm: FormGroup;
	contentChoiceItemIdToUpdate = null;
	contentChoiceId: number = -1;
	//dbops: DBOperation;
    //text: string = "";
    text: FormControl = new FormControl('');
    subs = new Subscription();
    @Input() content: Content;
    @Input() parentFormGroup: FormGroup | undefined;
    @Output() emitData = new EventEmitter();

	constructor(
		/*private contentService: ContentService,
		private contentChoiceItemService: ContentChoiceItemService,
        private route: ActivatedRoute,
        private location: Location,*/
		private formBuilder: FormBuilder,
        private dragulaService: DragulaService,
        private modal: NgbActiveModal
	) { 
        dragulaService.createGroup('sortableElements', {
            moves: (el, container, handle) => {
                return handle.classList.contains('element-handle');
            }
        });  
    }

  	ngOnInit() {
        //this.dbops = DBOperation.create;
        const choices = this.content && this.content.html && this.content.html.choices  
            ? this.content.html.choices
            : [];
        this.choiceForm =  this.formBuilder.group({
            'choices': this.formBuilder.array([])
        });

        if(typeof this.parentFormGroup != 'undefined'){
            this.choiceForm = this.parentFormGroup.get('html') as FormGroup;
        }

        this.choiceForm.get('choices')
            .setValidators(
                [
                    ArrayValidators.minLength(1)
                ]
            );
        choices.forEach(choice => {
            let items = this.choiceForm.get('choices') as FormArray;
            items.push(
                this.createChoice(choice.text, choice.value)
            );
        });

        this.subs.add(
            this.dragulaService.dropModel('sortableChoices')
                .subscribe(
                    ({ sourceModel, targetModel, item }) => {
                        this.choices.controls = sourceModel;
                        this.text.patchValue(this.elementToString());
                    }
                )
        );
        this.text.patchValue(this.elementToString());
        this.text.valueChanges
            .subscribe(value => {
                this.stringToElement();
            });



		/*this.choiceForm = this.formBuilder.group({
			'id': [''],
			'content_choice_id': ['', [
			]],
			'text': ['', [
				Validators.required,
				Validators.minLength(1), 
				Validators.maxLength(2000)
			]],
			'value': ['', [
				Validators.required,
				Validators.minLength(1), 
				Validators.maxLength(2000)
			]]
        });
        this.route.params.subscribe(result => {
			this.contentChoiceId = result.id;
			this.choiceForm.patchValue({
				'content_choice_id': this.contentChoiceId
			});
			this.loadChoices();
		})*/
  	}
    
    ngOnChanges() {
    }

    ngOnDestroy() {
        /*this.dragulaService.destroy('pages');
        this.dragulaService.destroy('contents');
        this.dragulaService.destroy('columns');
        this.dragulaService.destroy('rowSortable');*/
        this.dragulaService.destroy('sortableElements');
    }   

    /*public loadChoices(){
		if(this.contentChoiceId != -1){
			let id = this.contentChoiceId;
			this.contentService.getContentChoicesById(id).subscribe(result => {
				if(result.success){
					this.choices = result.data;
					console.log(this.choices);
				}            
			});
        }
    }

    public onSubmit(){
        switch(this.dbops){
            case DBOperation.create:
                this.contentChoiceItemService.storeContentChoiceItem(this.choiceForm.value)
                .subscribe(result => {
                    console.log(result);
                    if(result.success){
                        this.reset();
                        this.contentChoiceId = result.data.contentChoiceId;
                        this.choiceForm.patchValue({
                            'content_choice_id': result.data.contentChoiceId
                        });
                        this.loadChoices();
                    }
                });
            break;
            case DBOperation.update:
                const id = this.contentChoiceItemIdToUpdate;
                this.contentChoiceItemService.updateContentChoiceItem(id, this.choiceForm.value)
                .subscribe(result => {
                    console.log(result.data);
                    if(result.success){
                        this.reset();
                        this.loadChoices();
                    }
                });
            break;
        }
    }

    public create(){
        this.dbops = DBOperation.create;
        this.reset();
    }

    public savePosition(){
        let id = this.contentChoiceId;
        const orderedIds = this.choices.map(item => {
            return item.id;
        });
        this.contentService.updateContentChoicesPosition(id, orderedIds)
        .subscribe(result => {
            if(result.success){
                this.loadChoices();
            }
        });
    }

    public editContentChoice(id: number) {
        this.contentChoiceItemService.getContentChoiceItemById(id)
        .subscribe(result => {
            if(result.success){
                const content = result.data;
                this.dbops = DBOperation.update;
                this.contentChoiceItemIdToUpdate = content.id;   
                this.choiceForm.setValue({
                    'id': content.id,
                    'content_choice_id': content.content_choice_id,
                    'text': content.text,
                    'value': content.value,
                });
            }
        });
    }

    public deleteContentChoiceItem(id: number) {
        this.contentChoiceItemService.deleteContentChoiceItem(id)
        .subscribe(result => {
            if(result.success){
                this.loadChoices();
                this.reset();
            }
        });
    }

    private reset() {
        this.contentChoiceItemIdToUpdate = null;
        const resetExcept: string[] = ['content_choice_id', 'choices', 'tag', 'category', 'label'];

        Object.keys(this.choiceForm.controls).forEach(key => {
            if (resetExcept.findIndex(q => q === key) === -1) {
                this.choiceForm.get(key).reset();
            }
        });
    }*/
    
    public choiceChanged(): void {
        this.text.patchValue(this.elementToString(), {
            emitEvent: false
        });
    }

    public addChoice(){
        this.choices.push(this.createChoice());
    }

    public cancel(){
        this.modal.close();        
    }

    public save(){
        console.log(this.choices.value);
        this.emitData.emit(this.choiceForm.value);
        this.modal.close();        
    }

    public stringToElement(): void{
        this.choices.clear();
        console.log('t', this.text);
        if (this.text.value.length > 0) {
            const string = this.text.value.split('\n');

            for(let i = 0; i < string.length; i++){
                const str = string[i];
                let firstMatch = str;
                let secondMatch = '';
                if(str.indexOf('|') !== -1){
                    let match = str.split('|');
                    firstMatch = match[0];
                    secondMatch = str.substring(firstMatch.length + 1); //return '' if '|' was not found
                }
                const text  = typeof firstMatch !== 'undefined'
                    ? firstMatch
                    : '';
                const value = typeof secondMatch !== 'undefined'
                    ? secondMatch
                    : '';
                    
                this.choices.push(this.createChoice(text, value));
            }
        }
    }

    public removeContent($index: number) {
        this.choices.removeAt($index);
        this.text.patchValue(this.elementToString());
    }
  
    public cloneThis(name: string){
        const choicesLength = this.choices.value.length;
        if(choicesLength > 0){
            let cloneThisObjectName = name === 'value'
                ? 'text'
                : 'value';
            for(let i = 0; i < choicesLength; i++){
                this.choices.value[i][name] = this.choices.value[i][cloneThisObjectName];
            }
            this.text.patchValue(this.elementToString());
            this.stringToElement();
        }
    }
  
    public elementToString(): string {
        let string = [];

        //fire the `valueChanges` manually
        this.choices.updateValueAndValidity({ onlySelf: false, emitEvent: true });
        const choices = this.choices.value;

        if(typeof choices !== 'undefined' && choices.length > 0){
            for (let i = 0; i < choices.length; i++){
                let choice = choices[i];
                let pipe = choice.value === ''
                    ? ''
                    : '|';
                let element = {
                    text: typeof choice.text !== 'undefined'? choice.text : '',
                    value: typeof choice.value !== 'undefined'? choice.value : '',
                };

                string.push(
                    `${element.text}${pipe}${element.value}`
                );
            }
        }
        
        return string.join("\n");
    }

    private createChoice(text: string = '', value: string = '') : FormGroup {
        return this.formBuilder.group({
            text: [text, [
                Validators.required,
                Validators.minLength(1), 
                Validators.maxLength(2000)
            ]],
            value: [value, [
                Validators.required,
                Validators.minLength(1), 
                Validators.maxLength(2000)
            ]]
        });
    }
    
    get f(){
        return this.choiceForm;
    }

    get choices(){
        return this.f.get('choices') as FormArray;
    }
}
