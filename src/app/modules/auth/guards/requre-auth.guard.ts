import { Injectable } from '@angular/core';
import { CanLoad, CanActivate } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import { AuthService } from './../services';
import { RouterService } from './../../../services';

@Injectable({
    providedIn: 'root'
})
export class RequireAuthGuard implements CanActivate {
    constructor(
        private _authService: AuthService,
        private _routerService: RouterService
    ) { }

    canActivate(): Observable<boolean> {
        return this._authService
            .getIsAuthenticated$()
            .pipe(
                filter(isAuthenticated => isAuthenticated !== undefined),
                tap((isAuthenticated: boolean) => {
                    if (!isAuthenticated) {
                        this._routerService.go({ path: ['/', 'login'] });
                    }
                })
            );
    }
}
