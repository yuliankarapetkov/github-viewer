import { Component, OnInit, OnDestroy } from '@angular/core';

import { ToolbarService } from './../../../../services';
import { AuthService } from './../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    constructor(
        private _toolbarService: ToolbarService,
        private _authService: AuthService
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

    signInWithGoogle(): void {
        this._authService.signInWithGoogle();
    }
}
