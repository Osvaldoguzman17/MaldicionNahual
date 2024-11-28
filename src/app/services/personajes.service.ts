//importaciones
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personajes } from '../interfaces/interfaces';
import { Observable } from 'rxjs';// En este import se importa un Observable para manejar las  peticiones HTTP


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http:HttpClient) { }

// en este metodo se recibe los detalles de un personaje específico
  getDatos(): Observable<Personajes[]> {
    return this.http.get<Personajes[]>('https://nahual-eae72-default-rtdb.firebaseio.com/.json');
  }
    //Encargado de recuperar los datos de un personaje este metodo
getDetalle( nombre: string ) {
  return this.http.get<Personajes>(`https://nahual-eae72-default-rtdb.firebaseio.com/${nombre}.json`);

  }


}

