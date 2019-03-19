import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormConfigService } from './../../services/form-config.service';

@Component({
	selector: 'app-form-columns',
	templateUrl: './form-columns.component.html',
	styleUrls: ['./form-columns.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormColumnsComponent implements OnInit {
	@Input() row;
	@Input() pageIndex;
	@Input() rowIndex;

	config: {
		previewMode: boolean
	};

	constructor(
		private formConfigService: FormConfigService,
		private cd: ChangeDetectorRef
	) { }

	ngOnInit() {
		this.formConfigService.getConfig().subscribe(data => { 
			this.config = data; 
			this.cd.markForCheck();
		});
	}

	trackByFn(index, item){
		return index;
	}

	colNumber(columnIndex: number) {
		return parseInt(this.row.grid.trim().split(' ')[columnIndex]);
	}
}
