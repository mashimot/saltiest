import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MigrationRoutingModule } from './migration-routing.module';
import { MigrationComponent } from './migration.component';
import { CreateTableToJsonModule } from '../create-table-to-json/create-table-to-json.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MigrationComponent
  ],
  imports: [
    CommonModule,
    MigrationRoutingModule,
    CreateTableToJsonModule
  ]
})
export class MigrationModule { }
