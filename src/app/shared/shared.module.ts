/* Angular Imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Third-Party */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* App Imports */
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
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
