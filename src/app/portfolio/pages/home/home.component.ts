/* Angular Imports */
import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

/* Third Party Imports */
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
export class HomeComponent implements OnInit {

  /* Properties */
  //Icons
  faGitHub = faGithub;
  faLinkedIn = faLinkedin;
  
  constructor() { }

  ngOnInit(): void {
  }

}
