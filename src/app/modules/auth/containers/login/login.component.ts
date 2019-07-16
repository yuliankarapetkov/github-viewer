import { Component, OnInit, OnDestroy } from '@angular/core';

import { ToolbarService } from './../../../../services/toolbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    constructor(
        private _toolbarService: ToolbarService
    ) {
        this._toolbarService.setConfig({
            showBackButton: false,
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
