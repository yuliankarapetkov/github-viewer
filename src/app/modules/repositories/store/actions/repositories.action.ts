import { Action } from '@ngrx/store';

import { Repository } from '../../models';

export enum RepositoriesActionTypes {
    GetRepositories = '[Repositories] Get Repositories',
    GetRepositoriesSuccess = '[Repositories] Get Repositories Success',
    GetRepositoriesFailure = '[Repositories] Get Repositories Failure',

    FavoriteRepository = '[Repositories] Favorite Repository',
    FavoriteRepositorySuccess = '[Repositories] Favorite Repository Success',
    FavoriteRepositoryFailure = '[Repositories] Favorite Repository Failure',

    UnfavoriteRepository = '[Repositories] Unfavorite Repository',
    UnfavoriteRepositorySuccess = '[Repositories] Unfavorite Repository Success',
    UnfavoriteRepositoryFailure = '[Repositories] Unfavorite Repository Failure',
}

export class GetRepositories implements Action {
    readonly type = RepositoriesActionTypes.GetRepositories;
}

export class GetRepositoriesSuccess implements Action {
    readonly type = RepositoriesActionTypes.GetRepositoriesSuccess;
    constructor(public payload: Repository[]) {}
}

export class GetRepositoriesFailure implements Action {
    readonly type = RepositoriesActionTypes.GetRepositoriesFailure;
}

export class FavoriteRepository implements Action {
    readonly type = RepositoriesActionTypes.FavoriteRepository;
    constructor(public payload: Repository) {}
}

export class FavoriteRepositorySuccess implements Action {
    readonly type = RepositoriesActionTypes.FavoriteRepositorySuccess;
    constructor(public payload: Repository) {}
}

export class FavoriteRepositoryFailure implements Action {
    readonly type = RepositoriesActionTypes.FavoriteRepositoryFailure;
}

export class UnfavoriteRepository implements Action {
    readonly type = RepositoriesActionTypes.UnfavoriteRepository;
    constructor(public payload: Repository) {}
}

export class UnfavoriteRepositorySuccess implements Action {
    readonly type = RepositoriesActionTypes.UnfavoriteRepositorySuccess;
    constructor(public payload: Repository) {}
}

export class UnfavoriteRepositoryFailure implements Action {
    readonly type = RepositoriesActionTypes.UnfavoriteRepositoryFailure;
}

export type RepositoriesAction =
    | GetRepositories
    | GetRepositoriesSuccess
    | GetRepositoriesFailure
    | FavoriteRepository
    | FavoriteRepositorySuccess
    | FavoriteRepositoryFailure
    | UnfavoriteRepository
    | UnfavoriteRepositorySuccess
    | UnfavoriteRepositoryFailure;
