/* Angular Imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Third-Party */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* App Imports */
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MensajeModalComponent } from './mensaje-modal/mensaje-modal.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MensajeModalComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MensajeModalComponent
  ],
  imports: [
    /* Angular */
    CommonModule,
    /* Third-Party */
    FontAwesomeModule,
    /* Propios */
    AppRoutingModule
  ]
})
export class SharedModule { }
