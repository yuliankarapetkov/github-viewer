import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatCardModule,
    MatButtonModule,
} from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthRoutingModule } from './auth-routing.module';

import { containers } from './containers';
// import { reducer, effects } from './store';

@NgModule({
    declarations: [
        ...containers
    ],
    imports: [
        CommonModule,

        MatCardModule,
        MatButtonModule,

        // StoreModule.forFeature('auth', reducer),
        // EffectsModule.forFeature(effects)

        AuthRoutingModule,
    ]
})
export class AuthModule { }
