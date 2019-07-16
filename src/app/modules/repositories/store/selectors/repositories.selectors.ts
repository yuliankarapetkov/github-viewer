import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RepositoriesState } from '../reducers/repositories.reducer';

export const getRepositoriesState = createFeatureSelector<RepositoriesState>('repositories');

export const getRepositories = createSelector(getRepositoriesState, state => state.list);
export const getRepositoriesLoading = createSelector(getRepositoriesState, state => state.getRepositoriesLoading);
