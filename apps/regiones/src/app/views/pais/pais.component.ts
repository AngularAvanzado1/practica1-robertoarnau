import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { RegionesModel, RegionResponse } from '../../models/regiones-models';
import { RegionesService } from '../../services/regiones-service';
import { PaisesResponse, PaisesModel } from '../../models/paises-models';

@Component({
  selector: 'angular-banco-mundial-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaisComponent implements OnInit {


  public pais$: Observable<PaisesModel>;

  constructor( private route: ActivatedRoute, private regionesService: RegionesService, private router: Router) { }


  ngOnInit() {
    this.pais$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.regionesService.getPais$(params.get('id')).pipe(
          map(resp => resp = this.regionesService.parserPaisResponse(resp)),
          map((resp:PaisesResponse) => resp.paises[0])
        )
      )
    );
  }

  public goToListadoRegiones(): void{
    this.router.navigate(['index']);
  }

}
