import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import * as fromReducers from '../store/reducers';
import * as fromActions from '../store/actions';
import * as fromSelectors from '../store/selectors';
import { Repository } from '../models';

@Injectable({
    providedIn: 'root'
})
export class RepositoriesService {
    constructor(
        private _store: Store<fromReducers.RepositoriesState>
    ) {}

    requestRepositories(): void {
        this._store.dispatch(new fromActions.GetRepositories());
    }

    favoriteRepository(repository: Repository): void {
        this._store.dispatch(new fromActions.FavoriteRepository(repository));
    }

    unfavoriteRepository(repository: Repository): void {
        this._store.dispatch(new fromActions.UnfavoriteRepository(repository));
    }

    getRepositories$(): Observable<Repository[]> {
        return this._store.pipe(select(fromSelectors.getRepositories));
    }

    getFavoriteRepositories$(): Observable<Repository[]> {
        return this._store.pipe(select(fromSelectors.getFavoriteRepositories));
    }

    getSelectedRepository$(): Observable<Repository> {
        return this._store.pipe(select(fromSelectors.getSelectedRepository));
    }

    getRepositoriesLoaded$(): Observable<boolean> {
        return this._store.pipe(select(fromSelectors.getRepositoriesLoaded));
    }

    getRepositoriesLoading$(): Observable<boolean> {
        return this._store.pipe(select(fromSelectors.getRepositoriesLoading));
    }

    getFavoriteRepositoryLoading$(): Observable<boolean> {
        return this._store.pipe(select(fromSelectors.getFavoriteRepositoryLoading));
    }

    getUnfavoriteRepositoryLoading$(): Observable<boolean> {
        return this._store.pipe(select(fromSelectors.getUnfavoriteRepositoryLoading));
    }
}
