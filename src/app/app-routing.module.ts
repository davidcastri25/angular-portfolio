/* Angular Imports */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* App Imports */
import { HomeComponent } from './portfolio/pages/home/home.component';
import { AboutComponent } from './portfolio/pages/about/about.component';
import { ProjectsComponent } from './portfolio/pages/projects/projects.component';
import { ContactComponent } from './portfolio/pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'proyectos',
    component: ProjectsComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
