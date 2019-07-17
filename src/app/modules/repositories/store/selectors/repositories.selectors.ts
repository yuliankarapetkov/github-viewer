import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './../../../auth/store/selectors';

import { RepositoriesState } from '../reducers/repositories.reducer';
import { Repository } from '../../models';

export const getRepositoriesState = createFeatureSelector<RepositoriesState>('repositories');

export const getRepositories = createSelector(getRepositoriesState, state => state.list);
export const getRepositoriesLoading = createSelector(getRepositoriesState, state => state.getRepositoriesLoading);


export const getFavoriteRepositories = createSelector(
    getRepositories,
    fromAuth.getUserFavorites,
    (repositories: Repository[], favorites: string[]) => {
        return repositories && repositories.filter(repo => favorites.some(f => f === repo.id));
    });
