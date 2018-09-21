import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from '../shared/services/database.service';
import { HtmlElementService } from '../shared/services/html-element.service';

@Component({
	selector: 'app-form-info',
	templateUrl: './form-info.component.html',
	styleUrls: ['./form-info.component.css']
})
export class FormInfoComponent implements OnInit {
	@Input() pages;
	database: Array<any>;
	tags: Array<string>;

	constructor(private databaseService: DatabaseService,
		private htmLElementService: HtmlElementService
	) { }

	ngOnInit() {
		this.database = this.databaseService.getType();
		console.log(this.database);
		console.log(this.databaseService.get()['ORACLE']);
		this.tags = this.htmLElementService.getTags();
    }

    public buscaDominio() {
        alert("implementação");
    }
}
