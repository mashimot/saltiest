import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
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
import { CoreModule } from './_core/core.module';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderConfig, POSITION, SPINNER, PB_DIRECTION, NgxUiLoaderRouterModule } from  'ngx-ui-loader';
import { SpellCheckerModule } from './spell-checker/spell-checker.module';
import { LoginModule } from './login/login.module';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { JwtInterceptor } from './_helpers/jwt';
import { ErrorInterceptor } from './_helpers/error';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    overlayColor: 'white',
    fgsColor: 'black',
    bgsPosition: POSITION.bottomCenter,
    bgsSize: 90,
    bgsType: SPINNER.rectangleBounce, // background spinner type
    fgsType: SPINNER.foldingCube, // foreground spinner type
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
        ConfigChoicesModule,
        FormBuilderModule,
        ProjectsModule,
        CoreModule,
        HomeModule,
        SpellCheckerModule,
        LoginModule,
        DragulaModule,
        AppRoutingModule,
        HttpModule,
        HttpClientModule,
        NgbModule,
        HighlightModule.forRoot(),
        NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
        NgxUiLoaderHttpModule,
        NgxUiLoaderRouterModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        DragulaService,
        fakeBackendProvider,
    ],
    bootstrap: [AppComponent]

})
export class AppModule { }
