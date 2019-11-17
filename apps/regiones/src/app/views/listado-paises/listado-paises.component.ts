import { Component, OnInit } from '@angular/core';
import { RegionesService } from '../../services/regiones-service';
import { map } from 'rxjs/operators';
import { RegionResponse, RegionesModel } from '../../models/regiones-models';
import { ItemListConfigModel } from 'libs/shared/ui/src/lib/items-list/models/item-lis-config-model';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisesResponse, PaisesModel } from '../../models/paises-models';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-banco-mundial-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.scss']
})
export class ListadoPaisesComponent implements OnInit {

  public regiones: Array<RegionesModel>;
  public itemListConfig$: Observable<any>;
  constructor(private regionesService: RegionesService, private route: ActivatedRoute,private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params.region){
        this.getPaises(params.region)
      }
    });
  }

  private getPaises(region: string){
    this.itemListConfig$ = this.regionesService.getPaises$(region).pipe(
      map(resp => resp = this.regionesService.parserPaisResponse(resp)),
      map((resp: PaisesResponse) => resp.paises),
      map((paises:PaisesModel[]) => <ItemListConfigModel>{
        keysRefs: [
          {destinationKey: 'name', originKey: 'name'},
          {destinationKey: 'description', originKey: 'capitalCity'},
          {destinationKey: 'id', originKey: 'id'}
        ],
        data: paises
      } )
    );
  }

  public goToPais($event):void{
    this.router.navigate(['pais/'+$event]);
  }

}
