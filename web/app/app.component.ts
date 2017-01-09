import {Component, OnInit, OnChanges, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';

import {AuthGuard} from './login/auth.guard';
import {AppService} from './services/app.service';
import {Subscription} from 'rxjs/Subscription';

import './rxjs-modules';

@Component({
    selector: 'book-app',
    templateUrl: 'app/base.html'
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
    constructor(private router: Router, private _appService: AppService, private authGuard: AuthGuard) {
    }

    public loggedIn: boolean;
    subscription: Subscription;


    ngOnInit() {
        this.subscription = this._appService._loginstatus.subscribe(
            loggedIn => this.loggedIn = loggedIn
        );

        if (!this.authGuard.isActive()) {
            localStorage.removeItem('id_token');
        }


    }

    ngOnChanges() {
        console.log('--');
    }

    ngOnDestroy() {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    }


}


