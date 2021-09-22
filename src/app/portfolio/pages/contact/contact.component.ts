import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    //Animación para que la página haga un fadeIn sutil
    trigger('cargarPagina', [
      transition('void => *', [
        style({opacity: 0}),
        animate(300, style({opacity: 1}))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {

  mostrar!: boolean; //Si es false no se mostrará el mensaje

  constructor() { }

  ngOnInit(): void {
  }

  /* METHODS */
  onMostrarMensaje() {
    this.mostrar = true;
  }

  onEliminarMensaje() {
    this.mostrar = false;
  }

}
