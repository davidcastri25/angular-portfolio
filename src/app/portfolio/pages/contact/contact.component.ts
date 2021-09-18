import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
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
