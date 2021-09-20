/* Angular Imports */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/* App Imports */
import { MensajeService } from '../../services/mensaje.service';

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

  //Orden de mostrar mensaje
  @Output() onMostrarMensaje = new EventEmitter();
  
  /* CONSTRUCTOR */
  constructor(
    private fb: FormBuilder,
    private mensajeService: MensajeService) { }

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
    else {
      
      //Mandamos orden de que hay que mostrar el mensaje
      this.onMostrarMensaje.emit();

      //Pasamos dato del color al mensaje service
      this.mensajeService.setRojo(false);

      //Reseteamos el formulario
      this.miFormulario.reset();
    }
  }
  
}

