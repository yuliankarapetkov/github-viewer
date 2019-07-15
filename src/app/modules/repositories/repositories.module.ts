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

import { components } from './components';
import { containers } from './containers';

@NgModule({
    declarations: [
        ...components,
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
