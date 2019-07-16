import * as fromActions from '../actions';
import { AuthActionTypes } from '../actions';

export interface AuthState {
    user: any;
    isAuthenticated: boolean;
    signInLoading: boolean;
}

export const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    signInLoading: false
};

export function reducer(state = initialState, action: fromActions.AuthAction): AuthState {
    switch (action.type) {
        case AuthActionTypes.SignInWithGoogle: {
            return {
                ...state,
                signInLoading: true
            };
        }

        case AuthActionTypes.SignInWithGoogleSuccess:
        case AuthActionTypes.SignInWithGoogleFailure: {
            return {
                ...state,
                signInLoading: false
            };
        }
    }

    return state;
}
