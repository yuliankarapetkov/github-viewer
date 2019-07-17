import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ToolbarService } from './../../../../services/toolbar.service';
import { Repository } from '../../models';
import { RepositoriesService } from './../../services';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
    repository: Repository;

    private _unsubscribeAll$ = new Subject<void>();

    constructor(
        private _toolbarService: ToolbarService,
        private _repositoriesService: RepositoriesService
    ) {
        this._toolbarService.setConfig({
            showBackButton: true,
            showMenuButton: false
        });
    }

    ngOnInit(): void {
        this._repositoriesService
            .getSelectedRepository$()
            .pipe(takeUntil(this._unsubscribeAll$))
            .subscribe((repository: Repository) => this.repository = repository);
    }

    ngOnDestroy(): void {
        this._unsubscribeAll$.next();
        this._toolbarService.setConfig({
            showBackButton: false,
            showMenuButton: true
        });
    }

    favoriteRepository(): void {
        this._repositoriesService.favoriteRepository(this.repository);
    }

    unfavoriteRepository(): void {
        this._repositoriesService.unfavoriteRepository(this.repository);
    }
}
