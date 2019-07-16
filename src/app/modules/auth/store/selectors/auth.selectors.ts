import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from '../reducers/auth.reducer';

export const getAuthState = createFeatureSelector<AuthState>('auth');

export const getUser = createSelector(getAuthState, state => state.user);
export const getSignInLoading = createSelector(getAuthState, state => state.signInLoading);
export const getIsAuthenticated = createSelector(getAuthState, state => state.isAuthenticated);
