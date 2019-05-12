import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilderComponent } from "./form-builder.component";

const routes: Routes = [
    { path: 'form-builder', redirectTo: 'form-builder/1/edit', pathMatch: 'full' },
    { path: 'form-builder/:projectId/edit', component: FormBuilderComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class FormBuilderRoutingModule { }
