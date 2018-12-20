import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormBuilderModule } from './form-builder/form-builder.module';
import { HomeModule } from './home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule } from 'ngx-highlightjs';


@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        FormBuilderModule,
        HomeModule,
        DragulaModule,
        AppRoutingModule,
        HttpModule,
        HttpClientModule,
        NgbModule,
        HighlightModule.forRoot()
    ],
    providers: [DragulaService],
    bootstrap: [AppComponent]
})
export class AppModule { }
