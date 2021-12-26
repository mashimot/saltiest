import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BootstrapHtmlTemplate } from './../../_services/bootstrap-html-template.service';

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
        private sanitizer: DomSanitizer
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
            let bootstrapHtmlTemplate = new BootstrapHtmlTemplate();
            let html = bootstrapHtmlTemplate.get(this.content);
            return this.sanitizer.bypassSecurityTrustHtml(html);
        }
        
        return 'undefined';
    }
}
