import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { ConfigChoiceFormComponent } from './config-choice-form/config-choice-form.component';
import { ConfigChoicesComponent } from './config-choices.component';
import { ConfigChoicesListComponent } from './config-choices-list/config-choices-list.component';
import { ConfigChoicesRoutingModule } from './config-choices-routing.module';

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
export class ConfigChoicesModule {}
