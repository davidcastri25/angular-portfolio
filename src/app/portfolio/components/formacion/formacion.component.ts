/* Angular Imports */
import { Component, OnInit } from '@angular/core';

/* App Imports */
import { Formacion } from '../../interfaces/formacion.interface';
import { FormacionService } from '../../services/formacion.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.scss']
})

export class FormacionComponent implements OnInit {

  /* PROPERTIES */
  formaciones: Formacion[] = [];

  /* CONSTRUCTOR */
  constructor(private formacionService: FormacionService) { }

  /* LIFECYCLE HOOKS */
  ngOnInit(): void {
    this.getFormaciones();
  }

  /* METHODS */
  //Obtiene el array de formaciones subscribiendo el observable que emite el método del servicio FormacionService
  getFormaciones() {
    this.formacionService.getFormacion()
      .subscribe(formaciones => this.formaciones = formaciones);
  }


}
