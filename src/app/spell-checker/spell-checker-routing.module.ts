import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpellCheckerComponent } from './spell-checker.component';
import { AuthGuard } from '../_core/guards/auth.guard';

const routes: Routes = [{
  path: 'spell-checker',
  canActivate: [AuthGuard],
  children: [{
    path: '', component: SpellCheckerComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpellCheckerRoutingModule { }
