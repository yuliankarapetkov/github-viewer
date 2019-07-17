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

    getRepositories$(): Observable<Repository[]> {
        return this._store.pipe(select(fromSelectors.getRepositories));
    }
}
