import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatListModule,
    MatProgressSpinnerModule
} from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RepositoriesRoutingModule } from './repositories-routing.module';

import { components } from './components';
import { containers } from './containers';
import { reducer, effects } from './store';

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
        MatChipsModule,
        MatDividerModule,
        MatListModule,
        MatProgressSpinnerModule,

        StoreModule.forFeature('repositories', reducer),
        EffectsModule.forFeature(effects)
    ]
})
export class RepositoriesModule { }
