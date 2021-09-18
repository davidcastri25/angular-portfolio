import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  /* PROPERTIES */
  //Reactive Forms con FormBuilder  
  miFormulario: FormGroup = this.fb.group({
    nombre: [, Validators.required],
    email: [, [Validators.required, Validators.email]],
    asunto: [, Validators.required],
    mensaje: [, Validators.required]
  });

  /* CONSTRUCTOR */
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  /* METHODS */
  //Validamos si el campo del formulario es básico
  campoNoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors 
        && this.miFormulario.controls[campo].touched;
  }

  //Método que se llama al apretar al botón tipo submit
  enviar() {
    //Si el formulario no es válido marcamos todos los campos como tocados para que aparezcan los errores
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
    }
    //Si es válido, reseteamos el formulario
    else {
      this.miFormulario.reset();
    }
  }
}
