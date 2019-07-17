import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Repository } from '../../models';
import { RepositoriesService } from '../../services';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
    repositories$: Observable<Repository[]>;

    constructor(
        private _repositoriesService: RepositoriesService
    ) { }

    ngOnInit(): void {
        this.repositories$ = this._repositoriesService.getFavoriteRepositories$();
    }

    unfavoriteRepository(repository: Repository): void {
        this._repositoriesService.unfavoriteRepository(repository);
    }
}
