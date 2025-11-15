import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
  PB_DIRECTION,
  POSITION,
  SPINNER
} from 'ngx-ui-loader';
import { CoreModule } from './_core/core.module';
import { ErrorInterceptor } from './_helpers/error';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { JwtInterceptor } from './_helpers/jwt';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
  pbThickness: 3 // progress bar thickness
};

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule,
    NgxUiLoaderRouterModule
  ],
  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
