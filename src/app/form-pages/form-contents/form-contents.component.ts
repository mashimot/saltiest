import { Component, OnInit, Input } from '@angular/core';
import { FormContentConfigService } from '../../services/form-content-config.service';
import { FormConfigService } from './../../services/form-config.service';
import { DragulaService } from 'ng2-dragula';

@Component({
    selector: 'app-form-contents',
    templateUrl: './form-contents.component.html',
    styleUrls: ['./form-contents.component.css']
})
export class FormContentsComponent implements OnInit {
    showOptions: boolean;
    config: {
        previewMode: boolean
    };

    @Input() column;

    constructor(
        private formContentConfigService: FormContentConfigService,
        private formConfigService: FormConfigService
    ) {}

    ngOnInit() {
        this.showOptions = false;
        this.formConfigService.getConfig().subscribe(
            (data) => this.config = data
        );
    }

    sendDataToModal(content): void {
        this.formContentConfigService.setContent(content);
    }

    deleteContent(contentIndex) : void {
        this.column.contents.splice(contentIndex, 1);
    }

}
