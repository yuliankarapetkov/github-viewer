import { Component, OnInit, OnDestroy } from '@angular/core';

import { ToolbarService } from 'src/app/services';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
    constructor(
        private _toolbarService: ToolbarService
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
}
