import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { RegionesModel, RegionResponse } from '../../models/regiones-models';
import { RegionesService } from '../../services/regiones-service';

@Component({
  selector: 'angular-banco-mundial-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionComponent implements OnInit {


  public region$: Observable<RegionesModel>;

  constructor(
    private route: ActivatedRoute,
    private regionesService: RegionesService,
    private router: Router) {
   }


  ngOnInit() {
    this.region$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.regionesService.getRegion$(params.get('code')).pipe(
          map(resp => resp = this.regionesService.parserRegionResponse(resp)),
          map((resp:RegionResponse) => resp.regions[0])
        )
      )
    );
  }

  public goToListadoRegiones(): void{
    this.router.navigate(['index']);
  }

}
