import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { RouterService, ToolbarService } from './services';
import { AuthService } from './modules/auth/services';
import { ToolbarConfig } from './models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    toolbarConfig$: Observable<ToolbarConfig>;
    favoritesCount$: Observable<number>;
    signOutLoading$: Observable<boolean>;

    constructor(
        private _toolbarService: ToolbarService,
        private _authService: AuthService,
        private _routerService: RouterService
    ) {
        this.toolbarConfig$ = this._toolbarService.getConfig$();
    }

    ngOnInit(): void {
        this._authService.requestUser();
        this.favoritesCount$ = this._authService.getUserFavoritesCount$();
        this.signOutLoading$ = this._authService.getSignOutLoading$();
    }

    goBack(): void {
        this._routerService.back();
    }

    signOut(): void {
        this._authService.signOut();
    }
}
