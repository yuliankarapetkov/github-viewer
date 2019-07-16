import { Action } from '@ngrx/store';

export enum RepositoriesActionTypes {
    GetRepositories = '[Repositories] Get Repositories',
    GetRepositoriesSuccess = '[Repositories] Get Repositories Success',
    GetRepositoriesFailure = '[Repositories] Get Repositories Failure',
}

export class GetRepositories implements Action {
    readonly type = RepositoriesActionTypes.GetRepositories;
}

export class GetRepositoriesSuccess implements Action {
    readonly type = RepositoriesActionTypes.GetRepositoriesSuccess;
}

export class GetRepositoriesFailure implements Action {
    readonly type = RepositoriesActionTypes.GetRepositoriesFailure;
}

export type RepositoriesAction =
    | GetRepositories
    | GetRepositoriesSuccess
    | GetRepositoriesFailure;
