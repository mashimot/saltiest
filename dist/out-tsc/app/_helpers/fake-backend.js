var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        var users = [
            { id: 1, username: 'test', password: 'test', firstName: 'First Name', lastName: 'Last Name' }
        ];
        var authHeader = request.headers.get('Authorization');
        var isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(function () {
            // authenticate - public
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                var user = users.find(function (x) { return x.username === request.body.username && x.password === request.body.password; });
                if (!user)
                    return error('Username or password is incorrect');
                return ok({
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    token: "fake-jwt-token"
                });
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
        // private helper functions
        function ok(body) {
            return of(new HttpResponse({ status: 200, body: body }));
        }
        function unauthorised() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }
        function error(message) {
            return throwError({ status: 400, error: { message: message } });
        }
    };
    FakeBackendInterceptor = __decorate([
        Injectable()
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());
export { FakeBackendInterceptor };
export var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
//# sourceMappingURL=fake-backend.js.map