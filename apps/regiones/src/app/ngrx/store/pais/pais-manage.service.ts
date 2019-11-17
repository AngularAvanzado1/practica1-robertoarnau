import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as PaisActions from './pais.actions';
import * as PaisSelectors from './pais.selectors';
import { PaisesModel } from '../../../models/paises-models';
import { Observable } from 'rxjs';


@Injectable({
 providedIn: 'root'
})

export class PaisManageService {
 constructor(private storePais: Store<PaisesModel>) {}

  //Actions

  public loadPais() {
    this.storePais.dispatch(PaisActions.loadPais());
  }

  public addPais(newPais: PaisesModel) {
    this.storePais.dispatch(
      PaisActions.addPais({
        newPais: { ...newPais }
      })
    );
  }

  public setPaisName(paisName: string) {
    this.storePais.dispatch(
      PaisActions.setPaisName({ newName: paisName })
    );
  }

  public setPaisCapitalCity(capitalName: string) {
    this.storePais.dispatch(
      PaisActions.setPaisCapitalCity({ newCapital: capitalName })
    );
  }

  /// Selectos

  public getPais$(): Observable<PaisesModel> {
    return this.storePais.select(PaisSelectors.getPais);
  }

  public getPaisName$(): Observable<string> {
    return this.storePais.select(PaisSelectors.getPaisName);
  }


}
