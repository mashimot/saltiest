import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//import { DragulaModule, DragulaService } from 'ng2-dragula';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule } from 'ngx-highlightjs';
import { CoreModule } from './_core/core.module';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderConfig, POSITION, SPINNER, PB_DIRECTION, NgxUiLoaderRouterModule } from  'ngx-ui-loader';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { JwtInterceptor } from './_helpers/jwt';
import { ErrorInterceptor } from './_helpers/error';
import { NgxPaginationModule } from 'ngx-pagination';
import { ConfigChoiceFormComponent } from './config-choices/config-choice-form/config-choice-form.component';
import { ConfigChoicesComponent } from './config-choices/config-choices.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    overlayColor: 'white',
    fgsType: SPINNER.rotatingPlane, // foreground spinner type
    fgsPosition: POSITION.topRight,
    fgsColor: 'dark-blue',
    fgsSize: 50,
    bgsType: SPINNER.rotatingPlane, // background spinner type
    bgsPosition: POSITION.bottomRight,
    bgsColor: 'dark-blue',
    bgsSize: 50,
    bgsOpacity: 1,
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
        CoreModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        //NgxPaginationModule,
        HighlightModule.forRoot(),
        NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
        NgxUiLoaderHttpModule,
        NgxUiLoaderRouterModule
    ],
    providers: [
        //{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        //DragulaService,
        fakeBackendProvider,
    ],
    bootstrap: [AppComponent]

})
export class AppModule { }
