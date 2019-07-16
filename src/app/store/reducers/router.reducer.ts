import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';

import * as fromRouterStore from '@ngrx/router-store';

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}

export class CustomSerializer implements fromRouterStore.RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { url } = routerState;
        const { queryParams } = routerState.root;

        let state: ActivatedRouteSnapshot = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }

        const { params } = state;

        return { url, queryParams, params };
    }
}
