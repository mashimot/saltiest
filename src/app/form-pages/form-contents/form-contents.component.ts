import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormConfigService } from './../../services/form-config.service';
import { RenderHtmlService } from '../../services/render-html.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormConfigComponent } from './../../form-builder/form-config/form-config.component';


@Component({
    selector: 'app-form-contents',
    templateUrl: './form-contents.component.html',
    styleUrls: ['./form-contents.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormContentsComponent implements OnInit {
    showOptions: boolean;
    config: {
        previewMode: boolean
    };
    options: any = {
        size: 'lg',
        backdrop : 'static',
        keyboard : false,
        centered: true
    };

    @Input() column;

    constructor(
        private formConfigService: FormConfigService,
        private renderHtmlService: RenderHtmlService,
        private modalService: NgbModal,
        private cd: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.showOptions = false;
        this.formConfigService.getConfig().subscribe(data => { 
			this.config = data; 
			this.cd.markForCheck();
		});
    }

    trackByFn(index, item){
        return index;
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

    sendDataToModal(contents, index): void{
        let m = this.modalService.open(FormConfigComponent, this.options);
        m.componentInstance.content = contents[index];
        m.componentInstance.emitData.subscribe(($e) => {
            contents[index] = $e;
            this.cd.markForCheck();
        });
    }

    deleteContent(contentIndex): void {
        this.column.contents.splice(contentIndex, 1);
    }
}
