import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RenderHtmlService } from './../../services/render-html.service';
import { FormContentConfigService } from 'src/app/services/form-content-config.service';

@Component({
    selector: 'app-render-content',
    templateUrl: './render-content.component.html',
    styleUrls: ['./render-content.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderContentComponent implements OnInit {
    @Input() content;
    mustRender: boolean = true;

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
            console.log('render');
            this.renderHtml.setParams(this.content);
            let html = this.renderHtml.get().html;
            //console.log(html);
            return this.sanitizer.bypassSecurityTrustHtml(html);
        }
        return 'undefined';
    }
}
