import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'repositories',
        pathMatch: 'full'
    },
    {
        path: 'repositories',
        loadChildren: './modules/repositories/repositories.module#RepositoriesModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
