import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BootstrapGridSystemService } from '../../_services/bootstrap-grid-system.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigChoicesComponent } from '../../config-choices/config-choices.component';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { ToolService } from 'src/app/shared/services/tool.service';
import { Column, Content } from 'src/app/_core/model';

@Component({
    selector: 'app-form-menu',
    templateUrl: './form-menu.component.html',
    styleUrls: ['./form-menu.component.css']
})
export class FormMenuComponent implements OnInit {
    tools$: Observable<any>;
    //categories: Array<any>;
    pageModel: object; 
    grids: Observable<{
        grid: string,
        columns: Column[]
    }>;
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

    constructor(
        private toolService: ToolService,
        private modalService: NgbModal
    ) {}

    ngOnInit() {
        //this.grids$ = new BootstrapGridSystemService().getGrid();
        this.bootstrap = [{
            grid: [
                `12`,
                `6 6`,
                `3 4 5`,
                `4 4 4`,
                `7 5`
            ].join("\n")
        }];
        this.tools$ = this.toolService
            .getTools()
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

    editChoices(content: Content): void{
        let m = this.modalService.open(ConfigChoicesComponent, this.options);
        m.componentInstance.content = content;
    }
}

