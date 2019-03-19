import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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
        private renderHtml: RenderHtmlService,
        private formContentConfig: FormContentConfigService,
        private cd: ChangeDetectorRef
    ) {
        this.content = {
            html: {},
            table: {}
        }
    }

    ngOnInit() {
        this.formContentConfig.getMustRender().subscribe(item => {
            console.log(item);
            this.mustRender = item;
        });
        
    }

    render() {
        if (typeof this.content !== 'undefined') {
            if(this.mustRender){
                console.log('render');
                this.renderHtml.setParams(this.content);
                let html = this.renderHtml.get().html;
                //console.log(html);
                return this.sanitizer.bypassSecurityTrustHtml(html);
            }
        }
        return 'undefined';
    }
}
