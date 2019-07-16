import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromRouterStore from '@ngrx/router-store';

import { environment } from '../../../environments/environment';
import { RouterStateUrl } from './router.reducer';

export interface State {
    routerReducer: fromRouterStore.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
    routerReducer: fromRouterStore.routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export * from './router.reducer';
