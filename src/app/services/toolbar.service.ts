import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';

import { ToolbarConfig } from './../models/toolbar.config';

@Injectable({
    providedIn: 'root'
})
export class ToolbarService {
    private readonly _defaultConfig: ToolbarConfig = {
        showBackButton: false,
        showMenuButton: true
    };
    private _config$ = new BehaviorSubject<ToolbarConfig>(this._defaultConfig);

    getConfig$(): Observable<ToolbarConfig> {
        return this._config$.asObservable();
    }

    setConfig(config: ToolbarConfig): void {
        this._config$.next(config);
    }
}
