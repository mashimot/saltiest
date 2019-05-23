var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
var AuthService = /** @class */ (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.loggedIn = new BehaviorSubject(false);
        //private API_URL: string = 'https://reqres.in/api/login';
        this.API_URL = 'http://127.0.0.1:8000/api/tools';
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(this.API_URL + "/1", {
            email: user.username,
            password: user.password
        })
            .subscribe(function (r) {
            if (r.isAuth) {
                _this.router.navigate(['/home']);
                _this.loggedIn.next(r.isAuth);
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
        /*if(user.username !== '' && user.password !== ''){
            this.loggedIn.next(true);
            this.router.navigate(['/']);
        }*/
    };
    AuthService.prototype.logoff = function () {
        this.loggedIn.next(null);
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Router,
            HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map