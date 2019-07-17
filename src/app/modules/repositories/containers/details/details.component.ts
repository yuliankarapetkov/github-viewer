import { Component, OnInit, OnDestroy } from '@angular/core';

import { ToolbarService } from 'src/app/services';
import { Repository } from '../../models';
import { RepositoriesDataService } from '../../services';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
    repository: Repository = null;

    constructor(
        private _toolbarService: ToolbarService,
        private _repositoryDataService: RepositoriesDataService
    ) {
        this._toolbarService.setConfig({
            showBackButton: true,
            showMenuButton: false
        });
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this._toolbarService.setConfig({
            showBackButton: false,
            showMenuButton: true
        });
    }

    saveRepository(): void {
        this._repositoryDataService.saveRepository(this.repository);
    }
}
