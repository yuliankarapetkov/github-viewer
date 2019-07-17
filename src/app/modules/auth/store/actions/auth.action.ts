import { Action } from '@ngrx/store';

import { User } from '../../models';

export enum AuthActionTypes {
    GetUser = '[Auth] Get User',
    GetUserSuccess = '[Auth] Get User Success',
    GetUserFailure = '[Auth] Get User Failure',

    SignInWithGoogle = '[Auth] Sign In With Google',
    SignInWithGoogleSuccess = '[Auth] Sign In With Google Success',
    SignInWithGoogleFailure = '[Auth] Sign In With Google Failure',

    SignOut = '[Auth] Sign Out',
    SignOutSuccess = '[Auth] Sign Out Success',
    SignOutFailure = '[Auth] Sign Out Failure',
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
    constructor(public payload: { id: string; email: string }) {}
}

export class SignInWithGoogleFailure implements Action {
    readonly type = AuthActionTypes.SignInWithGoogleFailure;
}

export class SignOut implements Action {
    readonly type = AuthActionTypes.SignOut;
}

export class SignOutSuccess implements Action {
    readonly type = AuthActionTypes.SignOutSuccess;
}

export class SignOutFailure implements Action {
    readonly type = AuthActionTypes.SignOutFailure;
}

export type AuthAction =
    | GetUser
    | GetUserSuccess
    | GetUserFailure
    | SignInWithGoogle
    | SignInWithGoogleSuccess
    | SignInWithGoogleFailure
    | SignOut
    | SignOutSuccess
    | SignOutFailure;
