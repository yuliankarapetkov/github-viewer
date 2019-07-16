import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { RouterService, ToolbarService } from './services';
import { ToolbarConfig } from './models';
import { AuthService } from './modules/auth/services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    toolbarConfig$: Observable<ToolbarConfig>;

    constructor(
        private _toolbarService: ToolbarService,
        private _authService: AuthService,
        private _routerService: RouterService
    ) {
        this.toolbarConfig$ = this._toolbarService.getConfig$();
    }

    ngOnInit(): void {
        this._authService.requestUser();
    }

    goBack(): void {
        this._routerService.back();
    }
}
