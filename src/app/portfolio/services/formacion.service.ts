/* Angular Imports */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/* App Imports */
import { Formacion } from '../interfaces/formacion.interface';
import { FORMACION } from '../data/formacion.data';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  constructor() { }

  /* METHODS */
  //Getter del array de Formaciones, devuelve un Observable que emite un array de objetos Formacion
  getFormacion(): Observable<Formacion[]> {
    let formaciones = of(FORMACION);
    return formaciones;
  }
}
