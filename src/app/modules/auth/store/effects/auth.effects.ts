import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { of } from 'rxjs';
import { switchMap, map, catchError, mapTo, filter, tap} from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';

import * as firebase from 'firebase/app';

import * as fromRootActions from '../../../../store/actions';
import * as fromActions from '../actions';
import { AuthActionTypes } from '../actions';
import { AuthDataService } from './../../services';
import { User } from '../../models';

@Injectable()
export class AuthEffects {
    constructor(
        private _actions$: Actions,
        private _authDataService: AuthDataService,
        private _snackBar: MatSnackBar
    ) {}

    @Effect()
    getUser$ = this._actions$
        .pipe(
            ofType(AuthActionTypes.GetUser),
            switchMap(() => {
                return this._authDataService
                    .getUser()
                    .pipe(
                        map((user: User | null) => new fromActions.GetUserSuccess(user)),
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
                        map((user: { id: string; email: string; }) => new fromActions.SignInWithGoogleSuccess(user)),
                        catchError(() => of(new fromActions.SignInWithGoogleFailure()))
                    );
            })
        );

    @Effect()
    signInWithGoogleSuccess$ =  this._actions$
        .pipe(
            ofType(AuthActionTypes.SignInWithGoogleSuccess),
            map((action: fromActions.SignInWithGoogleSuccess) => action.payload),
            tap(({ email }: { email: string; }) => this._snackBar.open(`Logged in as ${email}`, 'Close')),
            switchMap(() => {
                return [
                    new fromActions.GetUser(),
                    new fromRootActions.Go({ path: ['/', 'repositories'] })
                ];
            })
        );

    @Effect()
    signOut$ = this._actions$
        .pipe(
            ofType(AuthActionTypes.SignOut),
            switchMap(() => {
                return this._authDataService
                    .signOut()
                    .pipe(
                        map(() => new fromActions.SignOutSuccess()),
                        catchError(() => of(new fromActions.SignOutFailure()))
                    );
            })
        );

    @Effect()
    signOutSuccess$ =  this._actions$
        .pipe(
            ofType(AuthActionTypes.SignOutSuccess),
            tap(() => this._snackBar.open(`You have logged out successfully.`, 'Close')),
            switchMap(() => {
                return [
                    new fromActions.GetUser(),
                    new fromRootActions.Go({ path: ['/', 'login'] })
                ];
            })
        );
}
