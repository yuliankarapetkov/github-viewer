import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRouterStore from '@ngrx/router-store';

import { RouterStateUrl } from '../reducers/router.reducer';

export const getRouterState =  createFeatureSelector<fromRouterStore.RouterReducerState<RouterStateUrl>>('routerReducer');

export const getParams = createSelector(
    getRouterState,
    (router): any => {
        return router.state && router.state.params;
    }
);
