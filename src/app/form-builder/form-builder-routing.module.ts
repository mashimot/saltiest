import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormBuilderComponent } from "./form-builder.component";
import { AuthGuard } from "../_core/guards/auth.guard";

/*const routes: Routes = [{
    path: 'form-builder',
    canActivate: [AuthGuard],
    children: [
        { path: '', redirectTo: '1/edit', pathMatch: 'full' },
        { path: ':projectId/edit', component: FormBuilderComponent }
    ]
}];*/

const routes: Routes = [
  {
    path: ":projectId/edit",
    component: FormBuilderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class FormBuilderRoutingModule {}
