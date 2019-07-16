import { Action } from '@ngrx/store';

export enum AuthActionTypes {
    SignInWithGoogle = '[Auth] Sign In With Google',
    SignInWithGoogleSuccess = '[Auth] Sign In With Google Success',
    SignInWithGoogleFailure = '[Auth] Sign In With Google Failure',
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
    | SignInWithGoogle
    | SignInWithGoogleSuccess
    | SignInWithGoogleFailure;
