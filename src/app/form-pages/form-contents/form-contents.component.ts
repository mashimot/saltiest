import { Component, OnInit, Input } from '@angular/core';
import { FormContentConfigService } from '../../services/form-content-config.service';
import { FormConfigService } from './../../services/form-config.service';
import { RenderHtmlService } from '../../services/render-html.service';


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
        private formConfigService: FormConfigService,
        private renderHtmlService: RenderHtmlService
    ) {}

    ngOnInit() {
        this.showOptions = false;
        this.formConfigService.getConfig().subscribe(
            (data) => this.config = data
        );
    }

    copyHtml(content): void{

    }

    sendDataToModal(content): void {
        this.formContentConfigService.setContent(content);
    }

    deleteContent(contentIndex) : void {
        this.column.contents.splice(contentIndex, 1);
    }

}
