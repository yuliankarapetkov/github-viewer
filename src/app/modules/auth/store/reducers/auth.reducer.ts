import * as fromActions from '../actions';
import { AuthActionTypes } from '../actions';

import { User } from '../../models';

export interface AuthState {
    user: User;
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
