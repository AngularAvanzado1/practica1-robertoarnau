import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RegionesService } from '../../services/regiones-service';
import { map } from 'rxjs/operators';
import { RegionResponse, RegionesModel } from '../../models/regiones-models';
import { ItemListConfigModel } from 'libs/shared/ui/src/lib/items-list/models/item-lis-config-model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-banco-mundial-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public regiones: Array<RegionesModel>;
  public itemListConfig$: Observable<any>;
  constructor(private regionesService: RegionesService, private router: Router) {
  }

  ngOnInit() {
    this.itemListConfig$ = this.regionesService.getRegiones$().pipe(
      map(resp => resp = this.regionesService.parserRegionResponse(resp)),
      map((resp: RegionResponse) =>
        resp.regions.filter((region:RegionesModel) => parseInt(region.id,10) > 0 )),
      map((regions:RegionesModel[]) => <ItemListConfigModel>{
        keysRefs: [
          {destinationKey: 'name', originKey: 'name'},
          {destinationKey: 'description', originKey: 'iso2code'},
          {destinationKey: 'id', originKey: 'code'}
        ],
        data: regions
      } )
    );
  }

  public goToRegion($event):void{
    this.router.navigate(['region/'+$event]);
  }

}
