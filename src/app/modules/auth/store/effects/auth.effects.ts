import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { switchMap, map, catchError} from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { AuthDataService } from './../../services';

import * as fromActions from '../actions';
import { AuthActionTypes } from '../actions';

@Injectable()
export class AuthEffects {
    constructor(
        private _actions$: Actions,
        private _authDataService: AuthDataService
    ) {}

    @Effect()
    signInWithGoogle$ = this._actions$
        .pipe(
            ofType(AuthActionTypes.SignInWithGoogle),
            switchMap(() => {
                return this._authDataService
                    .signInWithGoogle()
                    .pipe(
                        map(() => new fromActions.SignInWithGoogleSuccess()),
                        catchError(error => of(new fromActions.SignInWithGoogleFailure()))
                    );
            })
        );

}
