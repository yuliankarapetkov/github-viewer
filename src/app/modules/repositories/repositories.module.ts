import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule
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

        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatChipsModule
    ]
})
export class RepositoriesModule { }
