import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';

import { Observable } from 'rxjs';

import { RouterService, ToolbarService } from './services';
import { AuthService } from './modules/auth/services';
import { ToolbarConfig } from './models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    toolbarConfig$: Observable<ToolbarConfig>;
    favoritesCount$: Observable<number>;
    signOutLoading$: Observable<boolean>;

    routeLoading: boolean;

    constructor(
        private _toolbarService: ToolbarService,
        private _authService: AuthService,
        private _routerService: RouterService,
        private _router: Router
    ) {
        this.toolbarConfig$ = this._toolbarService.getConfig$();
    }

    ngOnInit(): void {
        this._authService.requestUser();
        this.favoritesCount$ = this._authService.getUserFavoritesCount$();
        this.signOutLoading$ = this._authService.getSignOutLoading$();
    }

    ngAfterViewInit() {
        // TODO: Can we achieve this by using the router store?
        this._router
            .events
            .subscribe((event) => {
                if (event instanceof NavigationStart) {
                    this.routeLoading = true;
                } else if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
                    this.routeLoading = false;
                }
            });
    }

    goBack(): void {
        this._routerService.back();
    }

    signOut(): void {
        this._authService.signOut();
    }
}
