import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje-modal',
  templateUrl: './mensaje-modal.component.html',
  styleUrls: ['./mensaje-modal.component.scss']
})
export class MensajeModalComponent implements OnInit {

  /* Properties */
  mostrar: boolean = false;
  rojo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
