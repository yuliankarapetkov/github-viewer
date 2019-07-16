import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum RouterActionTypes {
    Go = '[Router] Go',
    Back = '[Router] Back',
    Forward = '[Router] Forward',
    RouteChange = '[Router] Route Change'
}

export class Go implements Action {
    readonly type = RouterActionTypes.Go;
    constructor(public payload: {
        path: any[];
        query?: object;
        extras?: NavigationExtras;
    }) {}
}

export class Back implements Action {
    readonly type = RouterActionTypes.Back;
}

export class Forward implements Action {
    readonly type = RouterActionTypes.Forward;
}

export class RouteChange implements Action {
    readonly type = RouterActionTypes.RouteChange;
    constructor(public payload: { params: any, path: string }) {}
}

export type RouterAction =
    | Go
    | Back
    | Forward
    | RouteChange;
