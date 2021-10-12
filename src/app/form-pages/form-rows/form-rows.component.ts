import { Component, OnInit, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { FormConfigService } from './../../_services/form-config.service';
import { RowService } from '../../shared/services/row.service';

@Component({
    selector: 'app-form-rows',
    templateUrl: './form-rows.component.html',
    styleUrls: ['./form-rows.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormRowsComponent implements OnInit {
    @Input() page;
    //@Output() pageChange = new EventEmitter();
    @Input() pageIndex: number;
    @Input() pageId: number;

    config: {
        previewMode: boolean;
    };
    
	constructor(
		private formConfigService: FormConfigService,
        private cd: ChangeDetectorRef,
        private rowService: RowService
	) { }

    ngOnInit() {
        this.formConfigService.getConfig().subscribe(data => { 
			this.config = data; 
			this.cd.markForCheck();
		});
    }
    
    deleteRow(rowIndex: number, row = { id: null }){
        if(row.id != null){
            this.rowService.deleteRow(row.id).subscribe(result => {
                if(result.success){
                    this.page.rows.forEach((cV, index) => {
                        if(cV.id == row.id){
                            this.page.rows.splice(index, 1);
                        }
                    });
                    this.cd.markForCheck();
                }
            });  
        } else {
            //static remove
            this.page.rows.splice(rowIndex, 1);
            this.cd.markForCheck();
        }
    }

    trackByFn(index, item) {
        return index; 
    }
}
