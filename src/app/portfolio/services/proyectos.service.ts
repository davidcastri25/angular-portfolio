/* Angular Imports */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/* App Imports */
import { Proyecto } from '../interfaces/proyecto.interface';
import { PROYECTOS } from '../data/proyecto.data';


@Injectable({
  providedIn: 'root'
})

export class ProyectosService {

  constructor() { }

  /* METHODS */
  //Getter de los proyectos
  getProyectos(): Observable<Proyecto[]> {
    let proyectos = of(PROYECTOS);
    return proyectos;
  }
}
