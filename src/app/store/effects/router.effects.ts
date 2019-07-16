import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { tap, map } from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';

import * as fromActions from '../actions/router.action';
import { RouterActionTypes } from '../actions';

@Injectable()
export class RouterEffects {
    constructor(
        private _actions$: Actions,
        private _router: Router,
        private _location: Location
    ) { }


    @Effect({ dispatch: false })
    navigate$ = this._actions$
        .pipe(
            ofType(RouterActionTypes.Go),
            map((action: fromActions.Go) => action.payload),
            tap(({path, query: queryParams, extras}) => {
                this._router.navigate(path, { queryParams, ...extras });
            })
        );

    @Effect({ dispatch: false })
    navigateBack$ = this._actions$
        .pipe(
            ofType(RouterActionTypes.Back),
            tap(() => this._location.back())
        );

    @Effect({ dispatch: false })
    navigateForward$ = this._actions$
        .pipe(
            ofType(RouterActionTypes.Forward),
            tap(() => this._location.forward())
        );
}
