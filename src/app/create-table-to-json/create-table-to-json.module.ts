import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTableToJsonComponent } from './create-table-to-json.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    CreateTableToJsonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports:[
    CreateTableToJsonComponent
  ]
})
export class CreateTableToJsonModule { }
