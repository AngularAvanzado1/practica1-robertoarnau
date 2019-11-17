import { createAction, props } from '@ngrx/store';
import { PaisesModel } from '../../../models/paises-models';

export const loadPais = createAction(
  '[Pais] Load Pais'
);

export const addPais = createAction(
  '[Pais] Add Pais',
  props<{ newPais: PaisesModel }>()
);

export const setPaisName = createAction(
  '[Pais] Select preferred PaymentMethod',
  props<{ newName: string }>()
);

export const setPaisCapitalCity = createAction(
  '[Pais] Set Expiration Date on PaymentMethod',
  props<{ newCapital: string }>()
);

 export const loadPaisSucess = createAction(
  '[Pais] Load Pais Success',
  props<{ newPais: PaisesModel }>()
 );

 export const loadPaisError = createAction(
  '[Pais] Load Pais Error',
  props<{ error: any }>()
 );



