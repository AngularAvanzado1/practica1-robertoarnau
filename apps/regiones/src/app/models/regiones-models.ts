
export interface RegionResponse {
  pagination: RegionPagination;
  regions: RegionesModel[];
}


export interface RegionPagination {
  page: number;
  pages: number;
  per_page: number;
  total: number;
}

export interface RegionesModel{
  id: string;
  code: string;
  iso2code: string;
  name: string;
}
