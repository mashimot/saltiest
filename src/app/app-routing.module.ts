import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    //{ path: '**', component: PageNotFoundComponent },
    {
      path: 'home',
      loadChildren: () => import ("./home/home.module").then(m => m.HomeModule)
    },
    {
      path: 'projects',
      loadChildren: () => import ("./projects/projects.module").then(m => m.ProjectsModule)
    },
    {
      path: 'login',
      loadChildren: () => import ("./login/login.module").then(m => m.LoginModule)
    },
    {
      path: 'form-builder',
      loadChildren: () => import ("./form-builder/form-builder.module").then(m => m.FormBuilderModule)
    },
    {
      path: 'config-choices',
      loadChildren: () => import ("./config-choices/config-choices.module").then(m => m.ConfigChoicesModule)
    },
    {
      path: 'migration',
      loadChildren: () => import ("./migration/migration.module").then(m => m.MigrationModule)
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
