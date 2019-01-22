import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RenderHtmlService } from './../../services/render-html.service';

@Component({
    selector: 'app-render-content',
    templateUrl: './render-content.component.html',
    styleUrls: ['./render-content.component.css']
})
export class RenderContentComponent implements OnInit {

    @Input() content;
    innerHtml: SafeHtml;

    constructor(
        private sanitizer: DomSanitizer,
        private renderHtml: RenderHtmlService
    ) {
        this.content = {
            html: {},
            table: {}
        }
    }

    ngOnInit() {

    }

    render() {
        if (typeof this.content !== 'undefined') {
            this.renderHtml.setParams(this.content);
            let html = this.renderHtml.get().html;
            //console.log(html);
            return this.sanitizer.bypassSecurityTrustHtml(html);
        }
        return 'undefined';
    }
}
