import { createFeatureSelector, createSelector } from '@ngrx/store';
import { paisFeatureKey, PaisState } from './pais.reducer';

export const getPaisState = createFeatureSelector<PaisState>(
  paisFeatureKey
);

export const getPais = createSelector(
  getPaisState,
 (state: PaisState) => state.pais
);

export const getPaisName = createSelector(
  getPaisState,
 (state: PaisState) => state.pais.name
);
