import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxPaisRoutingModule } from './ngrx-pais-routing.module';
import { NgrxPaisComponent } from './ngrx-pais.component';
import { StoreModule } from '@ngrx/store';
import * as fromPais from '../ngrx/store/pais/pais.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PaisEffects } from '../ngrx/store/pais/pais.effects';


@NgModule({
  declarations: [NgrxPaisComponent],
  imports: [
    CommonModule,
    NgrxPaisRoutingModule,
    StoreModule.forFeature(fromPais.paisFeatureKey, fromPais.reducer),
    EffectsModule.forFeature([PaisEffects])
  ]
})
export class NgrxPaisModule { }
