/* Angular Imports */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/* App Imports */
import { EXPERIENCIA } from '../data/experiencia.data';
import { Experiencia } from '../interfaces/experiencia.interface';

@Injectable({
  providedIn: 'root'
})

export class ExperienciaService {

  constructor() { }

  /* METHODS */
  //Getter del array de Experiencias, devuelve un Observable que emite un array de objetos Experiencia
  getExperiencia(): Observable<Experiencia[]> {
    let experiencias = of(EXPERIENCIA);
    return experiencias;
  }
}
