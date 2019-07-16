import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable, from } from 'rxjs';

import * as firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class AuthDataService {
    constructor(
        private _fireAuth: AngularFireAuth
    ) {}

    getUser(): Observable<firebase.User | null> {
        return this._fireAuth.authState;
    }

    signInWithGoogle(): Observable<firebase.auth.UserCredential> {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        return from(this._fireAuth.auth.signInWithPopup(googleAuthProvider));
    }
}
