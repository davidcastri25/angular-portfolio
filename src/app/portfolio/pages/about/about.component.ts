import { Component, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
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
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
