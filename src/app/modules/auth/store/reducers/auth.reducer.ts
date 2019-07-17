import * as fromActions from '../actions';
import { AuthActionTypes } from '../actions';

import { User } from '../../models';

export interface AuthState {
    user: User;
    isAuthenticated: boolean;
    signInLoading: boolean;
    signOutLoading: boolean;
}

export const initialState: AuthState = {
    user: null,
    isAuthenticated: undefined,
    signInLoading: false,
    signOutLoading: false
};

export function reducer(state = initialState, action: fromActions.AuthAction): AuthState {
    switch (action.type) {
        case AuthActionTypes.GetUserSuccess: {
            const user = action.payload;
            return {
                ...state,
                user,
                isAuthenticated: !!user,
            };
        }

        case AuthActionTypes.SignInWithGoogle: {
            return {
                ...state,
                signInLoading: true
            };
        }

        case AuthActionTypes.SignInWithGoogleSuccess: {
            return {
                ...state,
                isAuthenticated: true,
                signInLoading: false
            };
        }

        case AuthActionTypes.SignInWithGoogleFailure: {
            return {
                ...state,
                signInLoading: false
            };
        }

        case AuthActionTypes.SignOut: {
            return {
                ...state,
                signOutLoading: true
            };
        }

        case AuthActionTypes.SignOutSuccess: {
            return {
                ...state,
                isAuthenticated: false,
                signOutLoading: false
            };
        }

        case AuthActionTypes.SignOutFailure: {
            return {
                ...state,
                signOutLoading: false
            };
        }
    }

    return state;
}
