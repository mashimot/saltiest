import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SumBeEqualsToDirective } from '../shared/directives/sum-be-equals-to.directive';
import { CreateTableToJsonComponent } from './create-table-to-json.component';

@NgModule({
  declarations: [CreateTableToJsonComponent, SumBeEqualsToDirective],
  imports: [CommonModule, ReactiveFormsModule, NgbModule],
  exports: [CreateTableToJsonComponent, SumBeEqualsToDirective]
})
export class CreateTableToJsonModule {}
