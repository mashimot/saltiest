import { Component, OnInit, EventEmitter, Input, Output, ChangeDetectorRef } from '@angular/core';
import { DatabaseEngine } from '../shared/services/database-engine.service';
import { HtmlElementService } from '../shared/services/html-element.service';

@Component({
	selector: 'app-form-info',
	templateUrl: './form-info.component.html',
	styleUrls: ['./form-info.component.css'],
})
export class FormInfoComponent implements OnInit {
	@Input() pages;
	@Output() pagesChange = new EventEmitter();

	database: Array<any>;
	tags: Array<string>;

	constructor(
		private htmlElementService: HtmlElementService,
		private cdRef: ChangeDetectorRef 
	) { }

	ngOnInit() {
		this.database = Object.keys(DatabaseEngine.get()).map((item) => {
			return item.toUpperCase();
		});
		this.tags = this.htmlElementService.getTags();
	}
	
    ngAfterContentChecked(): void {
        this.cdRef.detectChanges()
	}
	
    public buscaDominio() {
        alert("implementação");
    }
}
