import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CreateTableToJsonService } from '../services/create-table-to-json.service';
import { BootstrapGridSystemService } from '../services/bootstrap-grid-system.service'
import { DatabaseEngine } from '../shared/services/database-engine.service';

@Component({
	selector: 'app-create-table-to-json',
	templateUrl: './create-table-to-json.component.html',
	styleUrls: ['./create-table-to-json.component.css']
})
export class CreateTableToJsonComponent implements OnInit {
	@Input() tableName;
	@Output() pageChange = new EventEmitter();
	@Output() tableNameChange = new EventEmitter();
	
	gridModel: string;
	database: Array<string>;
	errors: Array<string>;
	primaryKeys: any[];
	options = {
		database: <string> 'oracle'
	};
	string: string;

	constructor() {
		this.gridModel = '4 4 4';
		this.errors = [];
		this.database = [];
	}

	ngOnInit() {
		this.database = DatabaseEngine.getDatabaseEngines();
		this.string = [
			'create table if not exists random_table_1 (',
			'supplier_id number(10) not null primary key,',
			'supplier_name varchar2(50) not null,',
			'address varchar2(50),',
			'city varchar2(50),',
			'state varchar2(25),',
			'dat_now date,',
			'zip_code varchar2(10),price number(12,2)',
			');'
		].join("\n");
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
			this.tableNameChange.emit(ct.getTableName());
			this.pageChange.emit(pages);
		}
	}
}
