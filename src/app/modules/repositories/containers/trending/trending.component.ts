import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { RouterService } from './../../../../services';
import { RepositoriesService } from './../../services';
import { Repository } from '../../models';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
    item: Repository = null;
    repositories$: Observable<Repository[]>;

    constructor(
        private _repositoriesService: RepositoriesService,
        private _routerService: RouterService
    ) { }

    ngOnInit(): void {
        this._repositoriesService.requestRepositories();
        this.repositories$ = this._repositoriesService.getRepositories$();
    }

    seeDetails(repository: Repository): void {
        this._routerService.go({ path: ['/', 'repositories', repository.id] });
    }
}
