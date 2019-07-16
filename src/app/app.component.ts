import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Observable } from 'rxjs';

import { ToolbarService } from './services/toolbar.service';
import { ToolbarConfig } from './models/toolbar.config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    toolbarConfig$: Observable<ToolbarConfig>;

    constructor(
        private _location: Location,
        private _toolbarService: ToolbarService
    ) {
        this.toolbarConfig$ = this._toolbarService.getConfig$();
    }

    ngOnInit(): void {
    }

    goBack(): void {
        this._location.back();
    }
}
