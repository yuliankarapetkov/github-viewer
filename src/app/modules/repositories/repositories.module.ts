import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
} from '@angular/material';

import { RepositoriesRoutingModule } from './repositories-routing.module';
import { containers } from './containers';

@NgModule({
    declarations: [
        ...containers
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,

        RepositoriesRoutingModule,

        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule
    ]
})
export class RepositoriesModule { }
