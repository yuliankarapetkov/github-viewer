import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { switchMap, map, catchError} from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';

import * as firebase from 'firebase/app';

import * as fromActions from '../actions';
import { AuthActionTypes } from '../actions';
import { AuthDataService } from './../../services';
import { User } from '../../models';

@Injectable()
export class AuthEffects {
    constructor(
        private _actions$: Actions,
        private _authDataService: AuthDataService
    ) {}

    @Effect()
    getUser$ = this._actions$
        .pipe(
            ofType(AuthActionTypes.GetUser),
            switchMap(() => {
                return this._authDataService
                    .getUser()
                    .pipe(
                        map((firebaseUser: firebase.User | null) => {
                            const { uid, email } = firebaseUser;
                            const user: User = firebaseUser ? { uid, email } : null;
                            return new fromActions.GetUserSuccess(user);
                        }),
                        catchError(() => of(new fromActions.GetUserFailure()))
                    );
            })
        );

    @Effect()
    signInWithGoogle$ = this._actions$
        .pipe(
            ofType(AuthActionTypes.SignInWithGoogle),
            switchMap(() => {
                return this._authDataService
                    .signInWithGoogle()
                    .pipe(
                        map(() => new fromActions.SignInWithGoogleSuccess()),
                        catchError(() => of(new fromActions.SignInWithGoogleFailure()))
                    );
            })
        );

    @Effect()
    signInSuccess$ =  this._actions$
        .pipe(
            ofType(AuthActionTypes.SignInWithGoogleSuccess),
            switchMap(() => {
                return [
                    new fromActions.GetUser()
                ];
            })
        );
}
