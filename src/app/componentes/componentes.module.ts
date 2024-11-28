import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [DetalleComponent],
  imports: [CommonModule, IonicModule],
  exports: [DetalleComponent] 
})
export class ComponentesModule { }
