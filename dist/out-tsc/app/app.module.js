var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, POSITION, SPINNER, PB_DIRECTION, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { SpellCheckerModule } from './spell-checker/spell-checker.module';
import { LoginModule } from './login/login.module';
import { fakeBackendProvider } from './_helpers/fake-backend';
var ngxUiLoaderConfig = {
    overlayColor: 'white',
    fgsType: SPINNER.rotatingPlane,
    fgsPosition: POSITION.topRight,
    fgsColor: 'dark-blue',
    fgsSize: 50,
    bgsType: SPINNER.rotatingPlane,
    bgsPosition: POSITION.bottomRight,
    bgsColor: 'dark-blue',
    bgsSize: 50,
    bgsOpacity: 1,
    pbDirection: PB_DIRECTION.leftToRight,
    pbThickness: 3,
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                //{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
                //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
                DragulaService,
                fakeBackendProvider,
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map