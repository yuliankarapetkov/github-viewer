import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Repository } from '../models';

@Injectable({
    providedIn: 'root'
})
export class RepositoriesDataService {
    constructor() {}

    getRepositories(): Observable<Repository[]> {
        return of([]);
    }
}
