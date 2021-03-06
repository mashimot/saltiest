import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HtmlElementService } from '../../shared/services/html-element.service';
import { BootstrapGridSystemService } from '../../_services/bootstrap-grid-system.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigChoicesComponent } from '../../config-choices/config-choices.component';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
    selector: 'app-form-menu',
    templateUrl: './form-menu.component.html',
    styleUrls: ['./form-menu.component.css']
})
export class FormMenuComponent implements OnInit {
    tools: Array<any>;
    tools$: Observable<any>;
    //categories: Array<any>;
    pageModel: object; 
    grids: Array<any>;
    bootstrap: Array<{
        grid: string
    }>;
    optionType: number = 1;
    options: any = {
        size: 'lg',
        backdrop : 'static',
        keyboard : false,
        centered: true
    };

    @Output() isNewPage = new EventEmitter();

    constructor(
        private htmlElementService: HtmlElementService,
        private modalService: NgbModal
    ) {}

    ngOnInit() {
        //this.tools = [];
        this.grids = new BootstrapGridSystemService().getGrid();
        this.bootstrap = [{
            grid: [
                `6 6`,
                `2 4 4 2`,
                `4 4 4`,
                `7 5`
            ].join("\n")
        }];
        this.tools$ = this.htmlElementService
        //.getTools()
        .getStaticTools()
        .pipe(
            map(res => {
                return res.tools;
            })
        );
        this.pageModel = [{
            rows: [],
            name: "Salt - A tool for Lazy Developer"
        }];
    }
    
    createChoices(): void{
        this.modalService.open(ConfigChoicesComponent, this.options);
    }

    editChoices(content): void{
        let m = this.modalService.open(ConfigChoicesComponent, this.options);
        m.componentInstance.content = content;
    }

    public newPage(): void {
        this.isNewPage.emit(true);
    }
}

