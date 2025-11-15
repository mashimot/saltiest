import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../_core/guards/auth.guard";
import { MigrationComponent } from "./migration.component";

/*const routes: Routes = [{
  path: 'migration',
  canActivate: [AuthGuard],
  children: [
      { path: '', component: MigrationComponent }
  ]
}];*/

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    component: MigrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MigrationRoutingModule {}
