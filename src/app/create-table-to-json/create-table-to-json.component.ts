import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CreateTableToJsonService } from '../services/create-table-to-json.service';
import { BootstrapGridSystemService } from '../services/bootstrap-grid-system.service'
import { NgForm } from '@angular/forms';
import { DatabaseService } from '../shared/services/database.service';

@Component({
	selector: 'app-create-table-to-json',
	templateUrl: './create-table-to-json.component.html',
	styleUrls: ['./create-table-to-json.component.css']
})
export class CreateTableToJsonComponent implements OnInit {
	@Output() pageChange = new EventEmitter();
	gridModel: string;
	database: Array<string>;
	errors: Array<{ message?: string }>;
	primaryKeys: any[];
	options = {
		database: <string> 'oracle'
	};
	string: string;


	constructor(private db: DatabaseService) {
		this.gridModel = '3 4 5';
		this.errors = [];
		this.database = [];
	}

	ngOnInit() {
		this.database = this.db.getDBName();
		this.string = `
supplier_id number(10) NOT NULL  ,
supplier_name varchar2(50) NOT NULL,
address varchar2(50),
city varchar2(50),
state varchar2(25),
dat_now date,
zip_code varchar2(10)`.trim();
	}

	public onSubmit() {

	}

	public createTable() {
		let ct = new CreateTableToJsonService();
		ct.setString(this.string);
		ct.convert();
		this.errors = ct.getError();
		if (!ct.hasError()) {
            let data = ct.getData();
            let bootstrapGridSystem = new BootstrapGridSystemService(data, this.gridModel);
			bootstrapGridSystem.convert();
			let pages = bootstrapGridSystem.getPage();
			this.pageChange.emit(pages);
		}
	}
}
