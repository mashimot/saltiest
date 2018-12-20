import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormConfigService } from './../../services/form-config.service';

interface Html {
    teste: string;
}
interface Table {
    teste: string;
}
interface Content {
    html: Html;
    table?: Table; //optional
}

interface Column {
    contents: Array<Content>
}

interface Row {
    grid: string;
    columns: Array<Column>
}

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

}
