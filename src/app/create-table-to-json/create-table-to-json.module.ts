import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTableToJsonComponent } from './create-table-to-json.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SumBeEqualsToDirective } from '../shared/directives/sum-be-equals-to.directive';

@NgModule({
  declarations: [CreateTableToJsonComponent, SumBeEqualsToDirective],
  imports: [CommonModule, ReactiveFormsModule, NgbModule],
  exports: [CreateTableToJsonComponent, SumBeEqualsToDirective],
})
export class CreateTableToJsonModule {}
