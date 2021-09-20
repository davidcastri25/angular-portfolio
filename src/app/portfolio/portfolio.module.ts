/* Angular Imports */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

/* Third-Party */
/* Third-Party */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* App Imports */
import { AboutComponent } from './pages/about/about.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { MensajeModalComponent } from './components/mensaje-modal/mensaje-modal.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ExperienciaComponent,
    FormacionComponent,
    FormularioComponent,
    MensajeModalComponent,
    ProyectoComponent
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
    ReactiveFormsModule,
    /* Third-Party */
    FontAwesomeModule,
    /* Propios */
    AppRoutingModule,
    SharedModule
  ]
})
export class PortfolioModule { }
