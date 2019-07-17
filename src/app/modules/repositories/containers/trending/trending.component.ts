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

    constructor(
        private _repositoriesService: RepositoriesService
    ) { }

    ngOnInit(): void {
        this._repositoriesService.requestRepositories();
        this.repositories$ = this._repositoriesService.getRepositories$();
    }
}
