import { Action, createReducer, on } from '@ngrx/store';
import * as PaisActions from './pais.actions';
import { PaisesModel } from '../../../models/paises-models';

export const paisFeatureKey = 'pais';

export interface PaisState {
  pais: PaisesModel;
  error: any;
}

export const initialState: PaisState = {
  pais: {
    id: '0',
    capitalCity: 'vacio',
    iso2Code: '0',
    latitude: 0,
    longitude: 0,
    lendingType:{
      id: '0',
      iso2code: '0',
      value: ''
    },
    name: 'sin país',
    adminregion:{
      id: '0',
      iso2Code: '0',
      value: ''
    }
  },
  error:''
};

const paisReducer = createReducer(
  initialState,
    on(PaisActions.loadPais, state => state),

    on(PaisActions.addPais, (state, { newPais }) => {
      return {...state, pais: newPais };
    }),

    on(
      PaisActions.loadPaisSucess,(state, { newPais }) => {
        return {...state, pais: newPais };
    }),
    on(
      PaisActions.loadPaisError,(state, { error }) => {
        return {...state, error: { ...state.error, error }};
    })

);

export function reducer(state: PaisState | undefined, action: Action) {
  return paisReducer(state, action);
}
