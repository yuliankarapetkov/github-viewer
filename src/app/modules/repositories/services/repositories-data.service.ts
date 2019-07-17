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

    getRepositories(): Observable<Repository[]> {
        return of([]);
    }

    saveRepository(repository: Repository): Observable<void> {
        const save = async (): Promise<void> => {
            const userRef = this._firestore
                .collection('users')
                .doc(this._uid)
                .ref;

            const user = (await userRef.get()).data();

            if (user) {
                const { favorites } = user;

                if (!favorites.some(id => id === repository.id)) {
                    await userRef.update({ favorites: [ ...favorites, repository.id ] });
                }
            } else {
                await userRef.set({ id: this._uid, favorites: [ repository.id ] });
            }
        };

        return from(save());
    }

    removeRepository(repository: Repository): Observable<void> {
        const remove = async (): Promise<void> => {
            const userRef = this._firestore
                .collection('users')
                .doc(this._uid)
                .ref;

            const user = (await userRef.get()).data();

            if (user) {
                const { favorites } = user;

                if (favorites.some(id => id === repository.id)) {
                    await userRef.update({ favorites: favorites.filter(id => id !== repository.id) });
                }
            }
        };

        return from(remove());
    }
}
