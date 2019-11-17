import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RegionResponse, RegionPagination, RegionesModel } from '../models/regiones-models';
import { ItemListConfigModel } from 'libs/shared/ui/src/lib/items-list/models/item-lis-config-model';
import { PaisesModel, PaisesResponse } from '../models/paises-models';


@Injectable({
  providedIn: 'root'
})
export class RegionesService {

  private apiUrl = 'http://api.worldbank.org/v2';
  private format = 'format=json';
  private perPage = 'per_page=1000';
  private regionURL = '/region/';
  private countryURL = '/country/';

  constructor(private httpClient: HttpClient) {}

  public getRegiones$(): Observable <any>{
    return this.httpClient.get<ItemListConfigModel>(this.apiUrl+this.regionURL+'?'+this.format);
  }

  public getRegion$(code: string): Observable<any>{
    return this.httpClient.get<RegionesModel>(this.apiUrl+this.regionURL+code+'?'+this.format);
  }

  public getPaises$(region: string ): Observable<any>{
    return this.httpClient.get<PaisesModel>(this.apiUrl+this.regionURL+region+this.countryURL+'?'+this.format+'&'+this.perPage);
  }

  public getPais$(id: string, ): Observable<any>{
    return this.httpClient.get<PaisesModel>(this.apiUrl+this.countryURL+id+'?'+this.format);
  }

  public parserRegionResponse(response: any[]): RegionResponse{
    const regionresponse:RegionResponse = this.inicialiceRegionResponse();

    for(const arrayKey of response){
      if(this.instanceOfPagination(arrayKey)){
        regionresponse.pagination = arrayKey;
      }
      if(Array.isArray(arrayKey) && arrayKey[0] && this.instanceOfRegion(arrayKey[0])){
        regionresponse.regions = arrayKey;
      }
    }
    return regionresponse;
  }


  public parserPaisResponse(response: any[]): PaisesResponse{
    const paisresponse:PaisesResponse = this.inicialicePaiesResponse();

    for(const arrayKey of response){
      if(this.instanceOfPagination(arrayKey)){
        paisresponse.pagination = arrayKey;
      }
      if(Array.isArray(arrayKey) && arrayKey[0] && this.instanceOfPais(arrayKey[0])){
        paisresponse.paises = arrayKey;
      }
    }
    return paisresponse;
  }

  private instanceOfPagination(object: any): object is RegionPagination {
    return 'page' in object;
  }

  private instanceOfRegion(object: any): object is RegionesModel {
    return 'iso2code' in object;
  }

  private instanceOfPais(object: any): object is PaisesModel {
    return 'longitude' in object;
  }

  private inicialiceRegionResponse(): RegionResponse{
    return { pagination:{
              page: 0,
              pages: 0,
              per_page: 0,
              total: 0
            },
            regions:[]
          };
  }

  private inicialicePaiesResponse(): PaisesResponse{
    return { pagination:{
              page: 0,
              pages: 0,
              per_page: 0,
              total: 0
            },
            paises: []
          };
  }


}
