import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SpellCheckerComponent } from './spell-checker/spell-checker.component';

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: 'spell-checker', component: SpellCheckerComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
