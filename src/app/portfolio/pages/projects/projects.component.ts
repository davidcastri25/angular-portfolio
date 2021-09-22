/* Angular Imports */
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

/* App Imports */
import { Proyecto } from '../../interfaces/proyecto.interface';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    //Animación para que la página haga un fadeIn sutil (aquí aplicado solo al h2, ya que las fichas de proyecto tienen una animación a parte especial)
    trigger('cargarPagina', [
      transition('void => *', [
        style({opacity: 0}),
        animate(300, style({opacity: 1}))
      ])
    ]),   
    //Animación para que los proyectos vayan apareciendo uno a uno
    trigger('fadeIn', [ 
      transition('* => *', [
        query(':enter', [ //:enter es lo mismo que void => *
          style({ opacity: 0 }),
          stagger(400, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ]),
    ]),
  ]
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
