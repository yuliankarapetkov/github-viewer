import * as fromActions from '../actions';
import { RepositoriesActionTypes } from '../actions';

export interface RepositoriesState {
    list: any[];
    getRepositoriesLoading: boolean;
}

export const initialState: RepositoriesState = {
    list: [],
    getRepositoriesLoading: false
};

export function reducer(state = initialState, action: fromActions.RepositoriesAction): RepositoriesState {
    switch (action.type) {
        case RepositoriesActionTypes.GetRepositories: {
            return {
                ...state,
                getRepositoriesLoading: true
            };
        }

        case RepositoriesActionTypes.GetRepositoriesSuccess:
        case RepositoriesActionTypes.GetRepositoriesFailure: {
            return {
                ...state,
                getRepositoriesLoading: false
            };
        }
    }

    return state;
}
