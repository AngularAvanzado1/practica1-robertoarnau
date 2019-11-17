import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { RegionComponent } from './views/region/region.component';
import { ListadoPaisesComponent } from './views/listado-paises/listado-paises.component';
import { PaisComponent } from './views/pais/pais.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'region/:code',
    component: RegionComponent
  },
  {
    path: 'paises/:region',
    component: ListadoPaisesComponent
  },
  {
    path: 'pais/:id',
    component: PaisComponent
  },
  { path: 'ngrx/pais', loadChildren: () => import('./ngrx-pais/ngrx-pais.module').then(m => m.NgrxPaisModule) },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/index'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
