import { Action } from '@ngrx/store';

import { User } from '../../models';

export enum AuthActionTypes {
    GetUser = '[Auth] Get User',
    GetUserSuccess = '[Auth] Get User Success',
    GetUserFailure = '[Auth] Get User Failure',

    SignInWithGoogle = '[Auth] Sign In With Google',
    SignInWithGoogleSuccess = '[Auth] Sign In With Google Success',
    SignInWithGoogleFailure = '[Auth] Sign In With Google Failure',
}

export class GetUser implements Action {
    readonly type = AuthActionTypes.GetUser;
}

export class GetUserSuccess implements Action {
    readonly type = AuthActionTypes.GetUserSuccess;
    constructor(public payload: User | null) {}
}

export class GetUserFailure implements Action {
    readonly type = AuthActionTypes.GetUserFailure;
}

export class SignInWithGoogle implements Action {
    readonly type = AuthActionTypes.SignInWithGoogle;
}

export class SignInWithGoogleSuccess implements Action {
    readonly type = AuthActionTypes.SignInWithGoogleSuccess;
}

export class SignInWithGoogleFailure implements Action {
    readonly type = AuthActionTypes.SignInWithGoogleFailure;
}

export type AuthAction =
    | GetUser
    | GetUserSuccess
    | GetUserFailure
    | SignInWithGoogle
    | SignInWithGoogleSuccess
    | SignInWithGoogleFailure;
