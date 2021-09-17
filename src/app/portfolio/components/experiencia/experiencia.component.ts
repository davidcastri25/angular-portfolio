/* Angular Imports */
import { Component, OnInit } from '@angular/core';

/* App Imports */
import { Experiencia } from '../../interfaces/experiencia.interface';
import { ExperienciaService } from '../../services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})

export class ExperienciaComponent implements OnInit {
  /* PROPERTIES */
  experiencias: Experiencia[] = [];
  
  /* CONSTRUCTOR */
  constructor(private experienciaService: ExperienciaService) { }

  /* LIFECYCLE HOOKS */
  ngOnInit(): void {
    this.getExperiencias();
  }

  /* METHODS */
  //Obtiene el array de experiencias subscribiendo el observable que emite el método del servicio ExperienciaService
  getExperiencias () {
    this.experienciaService.getExperiencia()
      .subscribe(experiencias => this.experiencias = experiencias);
  }

}
