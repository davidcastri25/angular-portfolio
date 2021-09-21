/* Angular Imports */
import { Component, Input, OnInit } from '@angular/core';

/* Third-Party Imports */
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss'],
})
export class ProyectoComponent implements OnInit {
  /* PROPERTIES */
  //Font Awesome Icons
  verPagina = faExternalLinkAlt;
  gitHub = faGithub;

  //Propiedades para llenar la card
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() tecnologias: string = '';
  @Input() imagen: string = '';
  @Input() enlacePagina: string = '';
  @Input() enlaceCodigo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
