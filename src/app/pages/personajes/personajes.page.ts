import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Personajes } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../../componentes/detalle/detalle.component';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
  personajesSeleccionados: Personajes[] = [];

  constructor(private servicioPersonajes: PersonajesService,
    //Definimos el objeto para controlar una ventana modal
  private modalCtrl:ModalController
  ) {}

  /*Generamos el metodo  ver detalle que se habre una pestaña al dar clic y covierte al modal  
  que redirecciona a detalle y desglosa los datos la api */
async verDetalle(personaje: Personajes) {
  const modal = await this.modalCtrl.create({
    component: DetalleComponent,
    componentProps: { personaje } 
  });
  await modal.present();
}

ngOnInit() {
  this.servicioPersonajes.getDatos().subscribe((respuesta: any) => {
    console.log(respuesta); // Verifica la estructura del objeto en consola
    this.personajesSeleccionados = respuesta.personajes; // Accede al array personajes

    // Asignar descripciones personalizadas
    this.personajesSeleccionados.forEach((personaje: any) => {
     /* Se agregan descripciones personalizadas basadas en el nombre del personaje. 
     es decir, si el nombre del personaje coincide con uno de los 
     datos especificados en la api, se le asigna una descripcion.

     Las descripciones se asignan manualmente utilizando un 
     'switch' que encuentra el dato qeu se pido el cual es el nombre mismo que buscara en la api y 
     si lo encuentra le agregara descripcion. */
      switch (personaje.nombre) {
        case 'Izel':
          personaje.descripcion = 'Izel Contreras, un investigador paranormal chileno, dedicó su vida a desentrañar misterios sobrenaturales tras un evento inexplicable en su infancia. ';
          break;
        case 'Citlali':
          personaje.descripcion = 'Citlali Soto, esposa de Francisco, es una mujer intuitiva con un don especial para percibir lo sobrenatural, aprendido de su abuela curandera. ';
          break;
        case 'Tetzin':
          personaje.descripcion = 'Tetzin Ramírez, un campesino de 58 años, sobrevivió al ataque del Nahual que devastó su comunidad décadas   vive Marcado por cicatrices físicas y emocionales.';
          break;
          case 'Tlahtolli':
            personaje.descripcion = 'En una comunidad rural de Michoacán, un niño llamado Raymundo fue manipulado por una bruja para participar en un ritual oscuro, prometiéndole abundancia para su pueblo. ';
            break;
        default:
          personaje.descripcion = 'No hay descripcion';
          break;
      }
    });
  });
}

}
