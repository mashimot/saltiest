var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AuthService } from '../guards/auth.service';
var HeaderBarComponent = /** @class */ (function () {
    function HeaderBarComponent(authService) {
        this.authService = authService;
    }
    HeaderBarComponent.prototype.ngOnInit = function () {
    };
    HeaderBarComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    Object.defineProperty(HeaderBarComponent.prototype, "isUserLoggedIn", {
        get: function () {
            return this.authService.currentUserValue;
        },
        enumerable: true,
        configurable: true
    });
    HeaderBarComponent = __decorate([
        Component({
            selector: 'app-header-bar',
            templateUrl: './header-bar.component.html',
            styleUrls: ['./header-bar.component.css']
        }),
        __metadata("design:paramtypes", [AuthService])
    ], HeaderBarComponent);
    return HeaderBarComponent;
}());
export { HeaderBarComponent };
//# sourceMappingURL=header-bar.component.js.map