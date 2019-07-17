import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Observable, of } from 'rxjs';
import { take, tap, filter, catchError, switchMap } from 'rxjs/operators';

import { RepositoriesService } from './../services';

@Injectable({
    providedIn: 'root'
})
export class RequireRepositoriesLoadedGuard implements CanActivate {
    constructor(
        private _repositoriesService: RepositoriesService
    ) { }

    canActivate(): Observable<boolean> {
        return this.checkLoaded()
            .pipe(
                switchMap(() => of(true)),
                catchError(() => of(false))
            );
    }

    checkLoaded(): Observable<boolean> {
        return this._repositoriesService
            .getRepositoriesLoaded$()
            .pipe(
                tap((loaded: boolean) => {
                    if (!loaded) {
                        this._repositoriesService.requestRepositories();
                    }
                }),
                filter((loaded: boolean) => loaded),
                take(1)
            );
    }
}
