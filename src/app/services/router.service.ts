import { Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromReducers from '../store/reducers';
import * as fromActions from '../store/actions';

@Injectable({
    providedIn: 'root'
})
export class RouterService {
    constructor(
        private _store: Store<fromReducers.State>
    ) {}

    go(route: { path: any[]; query?: object; extras?: NavigationExtras; }): void {
        this._store.dispatch(new fromActions.Go(route));
    }

    back(): void {
        this._store.dispatch(new fromActions.Back());
    }

    forward(): void {
        this._store.dispatch(new fromActions.Forward());
    }
}
