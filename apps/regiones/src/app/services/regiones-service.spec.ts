
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { RegionesService } from './regiones-service';
import { RegionResponse } from '../models/regiones-models';

describe('GIVEN: a RegionesService', () => {
  describe('WHEN: the app is compiled', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
    });

    it('THEN: should be created', () => {
    const service: RegionesService = TestBed.get(RegionesService);
    expect(service).toBeTruthy();
    });

    it(`THEN: should return an observable when call 'getGrettings()'`, () => {
    const service: RegionesService = TestBed.get(RegionesService);
    const greetings$: Observable<any> = service.getRegiones$();
    expect(greetings$).toBeInstanceOf(Observable);
    });


    it(`THEN: should return list of regions and pagination info`,
    async(() => {
      const service: RegionesService = TestBed.get(RegionesService);
      service
      .getRegiones$()
      .subscribe(result =>
      expect(result).toBeLessThanOrEqual(2) );
      }));

    it(`THEN: should return and parser regions response is not null`,
    async(() => {
      const service: RegionesService = TestBed.get(RegionesService);
      service
      .getRegiones$()
      .subscribe(result =>{
        const regioneResponse:RegionResponse = service.parserRegionResponse(result);
        expect(regioneResponse.pagination).not.toBeNull();
      })
    }));
  });
 });
