import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgrxPaisComponent } from './ngrx-pais.component';

const routes: Routes = [{ path: '', component: NgrxPaisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxPaisRoutingModule { }
