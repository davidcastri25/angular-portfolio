import { Component, OnInit } from '@angular/core';
import { faAngular, faBootstrap, faGithub, faHtml5, faLinkedin, faSass } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  /* Properties */
  //Icons
  faGitHub = faGithub;
  faLinkedIn = faLinkedin; 
  faHTML = faHtml5;
  faSASS = faSass;
  faBootstrap = faBootstrap;
  faAngular = faAngular; 

  constructor() { }

  ngOnInit(): void {
  }

}
