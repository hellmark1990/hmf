import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppComponent}   from './app.component';
import {routing}        from './app.routes';


import {AUTH_PROVIDERS} from 'angular2-jwt/angular2-jwt';

import {AuthGuard} from './login/auth.guard';
// import {contentHeaders} from './config/headers';

//components
import {AuthService} from './services/auth.service';
import {AppService} from './services/app.service';

import {DatePickerComponent} from './components/datepicker/datepicker.component';
import {DatepickerModule} from 'ng2-bootstrap/ng2-bootstrap';
import {DropdownModule} from 'ng2-bootstrap/ng2-bootstrap';
import {TextMaskModule} from 'angular2-text-mask';



// import {User} from './login/auth';

// components
import {HeaderComponent} from './header/header.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';

import {DashboardComponent} from './dashboard/dashboard.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        routing,
        HttpModule,
        DatepickerModule,
        DropdownModule,
        TextMaskModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        DashboardComponent,
    ],
    providers: [
        AUTH_PROVIDERS,
        AuthGuard,
        AppService,
        AuthService,
        DashboardService,

    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}