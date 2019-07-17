import * as fromActions from '../actions';
import { RepositoriesActionTypes } from '../actions';

export interface RepositoriesState {
    list: any[];
    loaded: boolean;
    getRepositoriesLoading: boolean;
    favoriteRepositoryLoading: boolean;
    unfavoriteRepositoryLoading: boolean;
}

export const initialState: RepositoriesState = {
    list: [],
    loaded: false,
    getRepositoriesLoading: false,
    favoriteRepositoryLoading: false,
    unfavoriteRepositoryLoading: false
};

export function reducer(state = initialState, action: fromActions.RepositoriesAction): RepositoriesState {
    switch (action.type) {
        case RepositoriesActionTypes.GetRepositories: {
            return {
                ...state,
                getRepositoriesLoading: true
            };
        }

        case RepositoriesActionTypes.GetRepositoriesSuccess: {
            const list = action.payload;
            return {
                ...state,
                list,
                loaded: true,
                getRepositoriesLoading: false
            };
        }

        case RepositoriesActionTypes.GetRepositoriesFailure: {
            return {
                ...state,
                getRepositoriesLoading: false
            };
        }

        case RepositoriesActionTypes.FavoriteRepository: {
            return {
                ...state,
                favoriteRepositoryLoading: true
            };
        }

        case RepositoriesActionTypes.FavoriteRepositorySuccess:
        case RepositoriesActionTypes.FavoriteRepositoryFailure: {
            return {
                ...state,
                favoriteRepositoryLoading: false
            };
        }

        case RepositoriesActionTypes.UnfavoriteRepository: {
            return {
                ...state,
                unfavoriteRepositoryLoading: true
            };
        }

        case RepositoriesActionTypes.UnfavoriteRepositorySuccess:
        case RepositoriesActionTypes.UnfavoriteRepositoryFailure: {
            return {
                ...state,
                unfavoriteRepositoryLoading: false
            };
        }
    }

    return state;
}
