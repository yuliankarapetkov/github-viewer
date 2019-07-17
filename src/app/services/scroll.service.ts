import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ScrollService {
    private _routesScrollPositions: { [key: string]: number } = {};
    private _routes = {};

    private readonly _contentElementClassName = 'mat-drawer-content';

    private get _contentElement(): any {
        return document.getElementsByClassName(this._contentElementClassName)[0];
    }

    get scrollTop(): number {
        return this._contentElement.scrollTop;
    }

    set scrollTop(y: number) {
        setTimeout(() => this._contentElement.scrollTop = y, 0);
    }

    constructor(
        private _router: Router
    ) {
        this._router
            .events
            .subscribe((event) => {
                const currentUrl = this._router.url;
                if (event instanceof NavigationStart && this._routes[currentUrl]) {
                    this._routesScrollPositions[currentUrl] = this.scrollTop;
                } else if (event instanceof NavigationEnd && this._routes[event.url]) {
                    this.scrollTop = this._routesScrollPositions[event.url] || 0;
                }
            });
    }

    useRoutes(routes: string[]): void {
        this._routes = routes.reduce((prev, route) => ({ ...prev, [route]: true}), {});
    }
}
