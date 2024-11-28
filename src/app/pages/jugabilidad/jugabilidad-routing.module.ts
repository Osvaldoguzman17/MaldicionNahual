import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugabilidadPage } from './jugabilidad.page';

const routes: Routes = [
  {
    path: '',
    component: JugabilidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugabilidadPageRoutingModule {}
