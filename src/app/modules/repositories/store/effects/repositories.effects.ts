import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { switchMap, map, catchError} from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { RepositoriesDataService } from './../../services';

import * as fromActions from '../actions';
import { RepositoriesActionTypes } from '../actions';

@Injectable()
export class RepositoriesEffects {
    constructor(
        private _actions$: Actions,
        private _repositoriesDataService: RepositoriesDataService
    ) {}

    @Effect()
    getRepositories$ = this._actions$
        .pipe(
            ofType(RepositoriesActionTypes.GetRepositories),
            switchMap(() => {
                return this._repositoriesDataService
                    .getRepositories()
                    .pipe(
                        map(() => new fromActions.GetRepositoriesSuccess()),
                        catchError(error => of(new fromActions.GetRepositoriesFailure()))
                    );
            })
        );

}
