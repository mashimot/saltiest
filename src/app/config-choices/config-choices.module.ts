import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigChoicesRoutingModule } from './config-choices-routing.module';
import { ConfigChoicesComponent } from './config-choices.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { ConfigChoiceFormComponent } from './config-choice-form/config-choice-form.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfigChoicesListComponent } from './config-choices-list/config-choices-list.component';

@NgModule({
    imports: [
        ConfigChoicesRoutingModule,
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        DragulaModule.forRoot(),
        NgxPaginationModule,
        NgbModalModule
    ],
    exports: [ConfigChoicesComponent, ConfigChoiceFormComponent],
    declarations: [ConfigChoicesComponent, ConfigChoiceFormComponent, ConfigChoicesListComponent]
})
export class ConfigChoicesModule { }
