import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormBuilderModule } from './form-builder/form-builder.module';
import { ConfigChoicesModule } from './config-choices/config-choices.module';
import { HomeModule } from './home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule } from 'ngx-highlightjs';
import { ProjectsModule } from './projects/projects.module';
import { CoreModule } from './core/core.module';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderConfig, POSITION, SPINNER, PB_DIRECTION } from  'ngx-ui-loader';
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    bgsColor: 'red',
    bgsPosition: POSITION.bottomCenter,
    bgsSize: 40,
    bgsType: SPINNER.rectangleBounce, // background spinner type
    fgsType: SPINNER.rectangleBounce, // foreground spinner type
    pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
    pbThickness: 3, // progress bar thickness
};

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        ConfigChoicesModule,
        FormBuilderModule,
        ProjectsModule,
        CoreModule,
        HomeModule,
        DragulaModule,
        AppRoutingModule,
        HttpModule,
        HttpClientModule,
        NgbModule,
        HighlightModule.forRoot(),
        NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
        NgxUiLoaderHttpModule
    ],
    providers: [DragulaService],
    bootstrap: [AppComponent]

})
export class AppModule { }
