import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormConfigService } from './../../services/form-config.service';

@Component({
    selector: 'app-form-rows',
    templateUrl: './form-rows.component.html',
    styleUrls: ['./form-rows.component.css']
})
export class FormRowsComponent implements OnInit {
    @Input() page;
    @Input() pageIndex;

    config: {
        previewMode: boolean;
    };
    constructor(private formConfigService: FormConfigService) {

    }

    ngOnInit() {
        this.formConfigService.getConfig().subscribe(
            (data) => { this.config = data; }
        );
    }
    
    trackByFn(index, item) {
        return index; 
    }
}
