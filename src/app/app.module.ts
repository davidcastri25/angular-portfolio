/* Angular Imports */
import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';

/* App Imports */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /* Angular */
    BrowserModule,
    /* Propios */
    AppRoutingModule,
    PortfolioModule,
    SharedModule
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
