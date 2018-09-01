import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilderComponent } from "./form-builder.component";

const routes: Routes = [
    { path: 'form-builder', component: FormBuilderComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class FormBuilderRoutingModule { }
