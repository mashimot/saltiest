import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormConfigService } from './../../services/form-config.service';

@Component({
    selector: 'app-form-rows',
    templateUrl: './form-rows.component.html',
    styleUrls: ['./form-rows.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormRowsComponent implements OnInit {
    @Input() page;
    @Input() pageIndex;

    config: {
        previewMode: boolean;
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
    
    trackByFn(index, item) {
        return index; 
    }
}
