import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import * as firebase from 'firebase/app';


@Injectable({
    providedIn: 'root'
})
export class AuthDataService {
    constructor(
        private _fireAuth: AngularFireAuth,
        private _firestore: AngularFirestore
    ) {}

    getUser(): Observable<any> {
        return this._fireAuth
            .authState
            .pipe(switchMap(user => user ? this._firestore.collection('users').doc(user.uid).valueChanges() : of(null)));
    }

    signInWithGoogle(): Observable<firebase.auth.UserCredential> {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        return from(this._fireAuth.auth.signInWithPopup(googleAuthProvider));
    }

    signOut(): Observable<void> {
        return from(this._fireAuth.auth.signOut());
    }
}
