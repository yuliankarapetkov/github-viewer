import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import * as fromReducers from '../store/reducers';
import * as fromActions from '../store/actions';
import * as fromSelectors from '../store/selectors';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private _store: Store<fromReducers.AuthState>
    ) {}

    requestUser(): void {
        this._store.dispatch(new fromActions.GetUser());
    }

    signInWithGoogle(): void {
        this._store.dispatch(new fromActions.SignInWithGoogle());
    }

    signOut(): void {
        this._store.dispatch(new fromActions.SignOut());
    }

    getIsAuthenticated$(): Observable<boolean> {
        return this._store.pipe(select(fromSelectors.getIsAuthenticated));
    }

    getUserId$(): Observable<string> {
        return this._store.pipe(select(fromSelectors.getUserId));
    }

    getUserFavoritesCount$(): Observable<number> {
        return this._store.pipe(select(fromSelectors.getUserFavoritesCount));
    }

    getSignInLoading$(): Observable<boolean> {
        return this._store.pipe(select(fromSelectors.getSignInLoading));
    }

    getSignOutLoading$(): Observable<boolean> {
        return this._store.pipe(select(fromSelectors.getSignOutLoading));
    }
}
