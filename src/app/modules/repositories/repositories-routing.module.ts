
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequireRepositoriesLoadedGuard } from './guards';
import { DetailsComponent, FavoritesComponent, TrendingComponent } from './containers';

const routes: Routes = [
    {
        path: '',
        canActivate: [RequireRepositoriesLoadedGuard],
        children: [
            {
                path: '',
                redirectTo: 'trending',
                pathMatch: 'full'
            },
            {
                path: 'trending',
                component: TrendingComponent
            },
            {
                path: 'favorites',
                component: FavoritesComponent
            },
            {
                path: ':repositoryId',
                component: DetailsComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoriesRoutingModule { }
