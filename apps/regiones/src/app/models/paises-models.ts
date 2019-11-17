import { RegionPagination } from './regiones-models';

export interface PaisesResponse {
  pagination: RegionPagination;
  paises: PaisesModel[];
}


export interface PaisesModel{
  id: string;
  iso2Code: string;
  name: string;
  lendingType:LendingTypeModel;
  adminregion: AdminRegionModel;
  capitalCity: string;
  longitude: number;
  latitude: number;
}


export interface LendingTypeModel{
  id: string;
  iso2code: string;
  value: string;
}

export interface AdminRegionModel{
  id: string;
  iso2Code: string;
  value: string;
}

