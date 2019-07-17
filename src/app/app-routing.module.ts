import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequireAuthGuard } from './modules/auth/guards';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'repositories',
        pathMatch: 'full'
    },
    {
        path: 'repositories',
        canActivate: [RequireAuthGuard],
        loadChildren: './modules/repositories/repositories.module#RepositoriesModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                scrollPositionRestoration: 'enabled'
            }
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
