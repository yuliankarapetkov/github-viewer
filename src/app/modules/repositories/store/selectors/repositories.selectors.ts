import { Params } from '@angular/router';

import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from './../../../../store/selectors';
import * as fromAuth from './../../../auth/store/selectors';
import { RepositoriesState } from '../reducers';
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

export const getSelectedRepository = createSelector(
    getRepositories,
    fromRoot.getParams,
    (repositories: Repository[], params: Params) => {
        return repositories && repositories.find(repo => repo.id === params.repositoryId);
    });
