/* Angular Imports */
import { Component, OnInit } from '@angular/core';

/* App Imports */
import { Proyecto } from '../../interfaces/proyecto.interface';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  /* PROPERTIES */
  proyectos: Proyecto[] = [];

  /* CONSTRUCTOR */
  constructor(private proyectosService: ProyectosService) { }

  /* LIFECYCLE HOOKS */
  ngOnInit(): void {
    //Llamamos al método para cargar los datos
    this.getProyectos();
  }

  /* METHODS */
  //Obtenemos los proyectos
  getProyectos() {
    this.proyectosService.getProyectos()
      .subscribe(proyectos => this.proyectos = proyectos);
  }

}
