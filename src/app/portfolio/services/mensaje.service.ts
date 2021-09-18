import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MensajeService {
  /* PROPERTIES */
  //Propiedades para poder mostrar el mensaje cuando submit del formulario (interactúa con componente hijo mensaje-modal)
  mostrar!: boolean;
  rojo!: boolean;
  mensajeExito: string = "Correo electrónico enviado correctamente.";
  mensajeError: string = "Error al enviar el correo electrónico."
  constructor() { }

  /* METHODS */
  //Setter de mostrar
  setMostrar(nuevoValor: boolean) {
    this.mostrar = nuevoValor;
  }

  //Setter de rojo
  setRojo(nuevoValor: boolean) {
    this.rojo = nuevoValor;
  }

  //Getter mensaje exito
  getMensajeExito(): string {
    return this.mensajeExito;
  }

  //Getter mensaje error
  getMensajeError(): string {
    return this.mensajeError;
  }

  //Getter mostrar
  getMostrar(): boolean {
    return this.mostrar;
  }

  //Getter rojo
  getRojo(): boolean {
    return this.rojo;
  }
}
