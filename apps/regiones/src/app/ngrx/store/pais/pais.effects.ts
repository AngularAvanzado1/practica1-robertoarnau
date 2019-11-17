import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RegionesService } from '../../../services/regiones-service';
import { concatMap, map, catchError } from 'rxjs/operators';
import { EMPTY, Observable, of } from 'rxjs';

import * as PaisActions from './pais.actions';
import { initialState } from './pais.reducer';
import { PaisesResponse } from '../../../models/paises-models';



@Injectable()
export class PaisEffects {

  private storeKey = 'pais';

  constructor(private actions$: Actions, private regionService:RegionesService) {}

  public loadPais$ = createEffect(() => this.actions$.pipe(
    ofType(PaisActions.loadPais), concatMap(() => {
        try {
          return this.regionService.getPais$('ARG').pipe(
            map(resp => resp = this.regionService.parserPaisResponse(resp)),
            map((resp:PaisesResponse) => resp.paises[0]),
            map(resp =>PaisActions.loadPaisSucess({ newPais: resp })),
            catchError(err =>
              of(PaisActions.loadPaisError({error:err}))
            )
          )
        } catch (e) {
          return of(PaisActions.loadPaisError({error:'fallo del servicio'}));
        }
      })
    ));



  /*public addPaymentMethod$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PaisActions.addPais),
      concatMap(action => {
        try {
          let storedList = JSON.parse(
            window.localStorage.getItem(this.storeKey)
          );
          storedList = [...storedList, action.newPais];
          window.localStorage.setItem(
            this.storeKey,
            JSON.stringify(storedList)
          );
          return EMPTY;
        } catch (e) {
          return EMPTY;
        }
      })
    )
  );*/



}
