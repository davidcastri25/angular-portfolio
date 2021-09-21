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
    component: HomeComponent,
    //Meta Tags
    data: {
      title: 'Portfolio - David Castrillón',
      description: 'Página principal de mi portfolio web como Junior Front-End Developer con Angular.',
      //Social Media
      ogTitle: 'Portfolio - David Castrillón',
      ogDescription: 'Página principal de mi portfolio de Desarrollo Web.'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    //Meta Tags
    data: {
      title: 'Sobre Mí - David Castrillón',
      description: 'Información sobre mí, mi formación como Desarrollador y mi anterior formación y experiencia laboral.',
      robots: 'noindex', //No permito indexación
      //Social Media
      ogTitle: 'Sobre Mí - David Castrillón',
      ogDescription: 'Información sobre mi formación y experiencia.'
    }
  },
  {
    path: 'proyectos',
    component: ProjectsComponent,
    //Meta Tags
    data: {
      title: 'Proyectos - David Castrillón',
      description: 'Proyectos que he ido desarrollando, indicando con qué tecnologías están desarrollados y enlazando el repositorio de GitHub correspondiente en cada uno de ellos.',
      robots: 'nofollow', //No permito rastreo de enlace
      //Social Media
      ogTitle: 'Proyectos - David Castrillón',
      ogDescription: 'Mis proyectos de Desarrollo Web.'
    }
  },
  {
    path: 'contacto',
    component: ContactComponent,
    //Meta Tags
    data: {
      title: 'Contacto - David Castrillón',
      description: 'Formulario para poder contactarme.',
      robots: 'noindex', //No permito indexación
      //Social Media
      ogTitle: 'Contacto - David Castrillón',
      ogDescription: 'Formulario de contacto.'
    }
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
