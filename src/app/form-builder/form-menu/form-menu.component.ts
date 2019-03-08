import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormConfigService } from './../../services/form-config.service';
import { HtmlElementService } from '../../shared/services/html-element.service';
import { BootstrapGridSystemService } from '../../services/bootstrap-grid-system.service';

@Component({
    selector: 'app-form-menu',
    templateUrl: './form-menu.component.html',
    styleUrls: ['./form-menu.component.css']
})
export class FormMenuComponent implements OnInit {
    tools: Array<any>;
    pageModel: object; 
    grids: Array<any>;
    /*bootstrap: Array<{
        grid: string,
        columns: Array<any>
    }>;*/
    bootstrap: Array<{
        grid: string
    }>;
    config: {
        previewMode: boolean
    };
    previewMode: boolean;

    @Output() isNewFile = new EventEmitter();
    @Output() isNewPage = new EventEmitter();

    constructor(
      private formConfigService: FormConfigService,
      private htmlElementService: HtmlElementService
    ) {
      }

    ngOnInit() {
        this.previewMode = true;
        this.config = {
            previewMode: this.previewMode
        };
        this.preview();
        this.grids = new BootstrapGridSystemService().getGrid();
        this.bootstrap = [{
            grid: "6 6\n2 4 4 2\n\n4 4 4\n7 5"
        }];
        this.tools = this.htmlElementService.get();
        this.pageModel = [{
            rows: [],
            name: "Salt - A tool for Lazy Developer"
        }];
    }

    public preview(): void {
        this.previewMode = !this.previewMode;
        this.config = {
            previewMode: this.previewMode
        };
        this.formConfigService.setConfig(this.config);
    }

    public newFile(): void {
        this.isNewFile.emit(true);
    }

    public newPage(): void {
        this.isNewPage.emit(true);
    }
}
