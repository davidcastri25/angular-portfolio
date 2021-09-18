import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MensajeService } from '../../services/mensaje.service';

@Component({
  selector: 'app-mensaje-modal',
  templateUrl: './mensaje-modal.component.html',
  styleUrls: ['./mensaje-modal.component.scss']
})
export class MensajeModalComponent implements OnInit {

  /* Properties */  
  rojo!: boolean; //Si es false se mostrará en verde
  mensaje!: string; //Será el mensaje a sacar

  //Orden de mostrar mensaje
  @Output() onEliminarMensaje = new EventEmitter();

  /* CONSTRUCTOR */
  constructor(private mensajeService: MensajeService) { }

  ngOnInit(): void {    
    this.getRojo(); //Actualizamos propiedad para saber el color del mensaje
    this.getMensaje(); //Actualizamos propiedad con el mensaje
    setTimeout(() => this.eliminarMensaje(), 5000);
  }

  /* METHODS */
  //Recibimos datos de rojo del servicio
  getRojo() {
    this.rojo = this.mensajeService.getRojo();
  }

  //Recibimos el mensaje a mostrar del servicio
  getMensaje() {
    this.mensaje = this.mensajeService.getMensajeExito();
  }

  //Damos la orden de eliminar mensaje al padre
  eliminarMensaje() {
    this.onEliminarMensaje.emit();
  }
}
