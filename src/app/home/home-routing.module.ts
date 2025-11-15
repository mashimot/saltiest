import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { AuthGuard } from "../_core/guards/auth.guard";

/*const routes: Routes = [{
	path: 'home', 
	canActivate: [AuthGuard],
	children: [{
		path: '', component: HomeComponent
	}]
}];*/

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: "",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class HomeRoutingModule {}
