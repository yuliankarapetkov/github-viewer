import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { of } from 'rxjs';
import { switchMap, map, catchError, take, mapTo, tap} from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { RepositoriesDataService } from './../../services';

import * as fromActions from '../actions';
import { RepositoriesActionTypes } from '../actions';
import { Repository } from '../../models';

@Injectable()
export class RepositoriesEffects {
    constructor(
        private _actions$: Actions,
        private _repositoriesDataService: RepositoriesDataService,
        private _snackBar: MatSnackBar
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

    @Effect()
    favoriteRepository$ = this._actions$
        .pipe(
            ofType(RepositoriesActionTypes.FavoriteRepository),
            map((action: fromActions.FavoriteRepository) => action.payload),
            switchMap((repository: Repository) => {
                return this._repositoriesDataService
                    .favoriteRepository(repository)
                    .pipe(
                        take(1),
                        mapTo(new fromActions.FavoriteRepositorySuccess(repository)),
                        catchError(() => of(new fromActions.FavoriteRepositoryFailure(repository)))
                    );
            })
        );

    @Effect({ dispatch: false })
    favoriteRepositorySuccess$ = this._actions$
        .pipe(
            ofType(RepositoriesActionTypes.FavoriteRepositorySuccess),
            map((action: fromActions.FavoriteRepositorySuccess) => action.payload),
            tap((repository: Repository) => this._snackBar.open(`You have added ${repository.name} to favorites.`, 'Yay'))
        );

    @Effect({ dispatch: false })
    favoriteRepositoryFailure$ = this._actions$
        .pipe(
            ofType(RepositoriesActionTypes.FavoriteRepositoryFailure),
            map((action: fromActions.FavoriteRepositoryFailure) => action.payload),
            tap((repository: Repository) => this._snackBar.open(
                `Uh oh! Something wrong happened and we could not add ${repository.name} to favorites.`, 'No worries'))
        );

    @Effect()
    unfavoriteRepositoiry$ = this._actions$
        .pipe(
            ofType(RepositoriesActionTypes.UnfavoriteRepository),
            map((action: fromActions.UnfavoriteRepository) => action.payload),
            switchMap((repository: Repository) => {
                return this._repositoriesDataService
                    .unfavoriteRepository(repository)
                    .pipe(
                        take(1),
                        mapTo(new fromActions.UnfavoriteRepositorySuccess(repository)),
                        catchError(() => of(new fromActions.UnfavoriteRepositoryFailure(repository)))
                    );
            })
        );

    @Effect({ dispatch: false })
    unfavoriteRepositorySuccess$ = this._actions$
        .pipe(
            ofType(RepositoriesActionTypes.UnfavoriteRepositorySuccess),
            map((action: fromActions.UnfavoriteRepositorySuccess) => action.payload),
            tap((repository: Repository) => this._snackBar.open(`You have removed ${repository.name} from favorites.`, 'Thanks'))
        );

    @Effect({ dispatch: false })
    unfavoriteRepositoryFailure$ = this._actions$
        .pipe(
            ofType(RepositoriesActionTypes.UnfavoriteRepositoryFailure),
            map((action: fromActions.UnfavoriteRepositoryFailure) => action.payload),
            tap((repository: Repository) => this._snackBar.open(
                `Uh oh! Something wrong happened and we could not remove ${repository.name} from favorites.`, 'No worries'))
        );
}
