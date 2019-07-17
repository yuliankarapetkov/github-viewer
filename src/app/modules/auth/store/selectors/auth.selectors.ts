import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from '../reducers/auth.reducer';

export const getAuthState = createFeatureSelector<AuthState>('auth');

export const getUser = createSelector(getAuthState, state => state.user);
export const getIsAuthenticated = createSelector(getAuthState, state => state.isAuthenticated);
export const getSignInLoading = createSelector(getAuthState, state => state.signInLoading);
export const getSignOutLoading = createSelector(getAuthState, state => state.signOutLoading);

export const getUserId = createSelector(getUser, user => user && user.id);
export const getUserFavorites = createSelector(getUser, user => user && user.favorites);
