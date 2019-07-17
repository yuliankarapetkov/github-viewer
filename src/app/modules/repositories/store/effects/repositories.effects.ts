import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { switchMap, map, catchError, take} from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { RepositoriesDataService } from './../../services';

import * as fromActions from '../actions';
import { RepositoriesActionTypes } from '../actions';
import { Repository } from '../../models';

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
                        take(1),
                        map((repositories: Repository[]) => new fromActions.GetRepositoriesSuccess(repositories)),
                        catchError(error => of(new fromActions.GetRepositoriesFailure()))
                    );
            })
        );

}
