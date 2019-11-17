import { Component, OnInit } from '@angular/core';
import { PaisManageService } from '../ngrx/store/pais/pais-manage.service';
import { PaisesModel } from '../models/paises-models';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-banco-mundial-ngrx-pais',
  templateUrl: './ngrx-pais.component.html',
  styleUrls: ['./ngrx-pais.component.css']
})
export class NgrxPaisComponent implements OnInit {

  public pais$: Observable<PaisesModel>;
  public paisName$: Observable<string>;

  constructor(private paisManageService: PaisManageService) { }

  ngOnInit() {
    this.paisManageService.loadPais();

    //this.paisManageService.addPais();
    //this.paisManageService.setPaisName('Nuevo País desde ngrx');
    //this.paisManageService.setPaisCapitalCity('Nueva Capital desde ngrx');

    this.pais$ = this.paisManageService.getPais$();
    this.paisName$ = this.paisManageService.getPaisName$();
  }

  /*private inicializarPais(): PaisesModel{
    return {

    }
  }*/

}
