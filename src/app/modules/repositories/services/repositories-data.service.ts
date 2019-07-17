import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, of, from } from 'rxjs';

import { AuthService } from './../../auth/services';
import { Repository } from '../models';

@Injectable({
    providedIn: 'root'
})
export class RepositoriesDataService {
    private _uid: string;

    constructor(
        private _firestore: AngularFirestore,
        private _authService: AuthService
    ) {
        this._authService
            .getUserId$()
            .subscribe(uid => this._uid = uid);
    }

    getRepositories(): Observable<any[]> {
        return this._firestore
            .collection('repositories', ref => ref.limit(3))
            .valueChanges();
    }

    favoriteRepository(repository: Repository): Observable<void> {
        const favorite = async (): Promise<void> => {
            const userRef = this._firestore
                .collection('users')
                .doc(this._uid)
                .ref;

            const { favorites } = (await userRef.get()).data();

            if (!favorites.some((id: string) => id === repository.id)) {
                await userRef.update({ favorites: [ ...favorites, repository.id ] });
            }
        };

        return from(favorite());
    }

    unfavoriteRepository(repository: Repository): Observable<void> {
        const unfavorite = async (): Promise<void> => {
            const userRef = this._firestore
                .collection('users')
                .doc(this._uid)
                .ref;

            const { favorites } = (await userRef.get()).data();

            if (favorites.some((id: string) => id === repository.id)) {
                await userRef.update({ favorites: favorites.filter((id: string) => id !== repository.id) });
            }
        };

        return from(unfavorite());
    }
}
