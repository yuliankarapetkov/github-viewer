import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { RepositoriesService } from './../../services';
import { Repository } from '../../models';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
    repositories$: Observable<Repository[]>;
    loading$: Observable<boolean>;

    constructor(
        private _repositoriesService: RepositoriesService
    ) { }

    ngOnInit(): void {
        this.repositories$ = this._repositoriesService.getRepositories$();
        this.loading$ = this._repositoriesService.getRepositoriesLoading$();
    }
}
