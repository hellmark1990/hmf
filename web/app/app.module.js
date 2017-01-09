"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var angular2_jwt_1 = require('angular2-jwt/angular2-jwt');
var auth_guard_1 = require('./login/auth.guard');
// import {contentHeaders} from './config/headers';
//components
var auth_service_1 = require('./services/auth.service');
var app_service_1 = require('./services/app.service');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bootstrap_2 = require('ng2-bootstrap/ng2-bootstrap');
var angular2_text_mask_1 = require('angular2-text-mask');
// import {User} from './login/auth';
// components
var header_component_1 = require('./header/header.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                app_routes_1.routing,
                http_1.HttpModule,
                ng2_bootstrap_1.DatepickerModule,
                ng2_bootstrap_2.DropdownModule,
                angular2_text_mask_1.TextMaskModule
            ],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                dashboard_component_1.DashboardComponent,
            ],
            providers: [
                angular2_jwt_1.AUTH_PROVIDERS,
                auth_guard_1.AuthGuard,
                app_service_1.AppService,
                auth_service_1.AuthService,
                DashboardService,
            ],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map