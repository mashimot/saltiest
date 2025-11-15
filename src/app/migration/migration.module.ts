import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateTableToJsonModule } from '../create-table-to-json/create-table-to-json.module';
import { MigrationComponent } from './migration.component';
import { MigrationRoutingModule } from './migration-routing.module';

@NgModule({
  declarations: [MigrationComponent],
  imports: [CommonModule, MigrationRoutingModule, CreateTableToJsonModule]
})
export class MigrationModule {}
