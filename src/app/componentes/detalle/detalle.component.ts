import { Component, Input, OnInit } from '@angular/core';
import { Personajes } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {
  @Input() personaje!: Personajes; 
  

  constructor(private modalCtrl: ModalController) { }


  regresar() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {}
  

}
