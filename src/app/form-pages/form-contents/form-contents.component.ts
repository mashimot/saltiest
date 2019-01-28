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
        this.renderHtmlService.setParams(content);
        let code = this.renderHtmlService.get().html;
        this.copyToClipboard(code);
    }

    copyToClipboard(text) {
        if ((<any>window).clipboardData && (<any>window).clipboardData.setData) {
            // IE specific code path to prevent textarea being shown while dialog is visible.
            return (<any>window).clipboardData.setData("Text", text);
        } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
            var textarea = document.createElement("textarea");
            textarea.textContent = text;
            textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
            document.body.appendChild(textarea);
            textarea.select();
            try {
                return document.execCommand("copy");  // Security exception may be thrown by some browsers.
            } catch (ex) {
                console.warn("Copy to clipboard failed.", ex);
                return false;
            } finally {
                document.body.removeChild(textarea);
            }
        }
    }

    sendDataToModal(content): void {
        this.formContentConfigService.setContent(content);
    }

    deleteContent(contentIndex) : void {
        this.column.contents.splice(contentIndex, 1);
    }

}
