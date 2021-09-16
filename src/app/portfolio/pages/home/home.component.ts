/* Angular Imports */
import { Component, OnInit } from '@angular/core';

/* Third Party Imports */
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
