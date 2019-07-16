import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromReducers from '../store/reducers';
import * as fromActions from '../store/actions';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private _store: Store<fromReducers.AuthState>
    ) {}

    signInWithGoogle(): void {
        this._store.dispatch(new fromActions.SignInWithGoogle());
    }
}
