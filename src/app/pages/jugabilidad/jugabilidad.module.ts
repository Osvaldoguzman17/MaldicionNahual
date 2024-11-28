import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugabilidadPageRoutingModule } from './jugabilidad-routing.module';

import { JugabilidadPage } from './jugabilidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugabilidadPageRoutingModule
  ],
  declarations: [JugabilidadPage]
})
export class JugabilidadPageModule {}
