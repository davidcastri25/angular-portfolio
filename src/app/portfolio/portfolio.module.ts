/* Angular Imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Third-Party */
/* Third-Party */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* App Imports */
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    /* Angular */
    CommonModule,
    /* Third-Party */
    FontAwesomeModule
  ]
})
export class PortfolioModule { }
