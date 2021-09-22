/* Angular Imports */
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  /* CONSTRUCTOR */
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}

  /* LIFECYCLE HOOKS */
  ngOnInit() {

    this.router.events
    .pipe(
      //Me quedo con el evento NavigationEnd (cuando una navegación del router se completa exitosamente)
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe(() => { //Subscribimos el evento NavigationEnd

      //Comprobamos si la ruta actual tiene rutas hijas
      var rt = this.getChild(this.activatedRoute);

      //Subscribimos el data de la ruta en la que estamos, así podremos leer la data de la ruta
      rt.data.subscribe(data => {

        //Asignamos el nuevo title
        this.titleService.setTitle(data.title);

        //En los siguientes condicionales, miramos si el data de la ruta en la que estamos contiene o no ese dato (propiedad del objeto). En función de ello lo actualizaremos o lo quitaremos
        if(data.description) { //description
          this.metaService.updateTag({ name: 'description', content: data.description });
        }
        else {
          this.metaService.removeTag("name='description'");
        }

        if(data.robots) { //robots
          this.metaService.updateTag({ name: 'robots', content: data.robots });
        }
        else {
          this.metaService.updateTag({ name: 'robots', content: "follow,index" }); //En este caso, en vez de eliminarlas mejor dejarlas en sus valores por defecto
        }

        if(data.ogTitle) { //og:title
          this.metaService.updateTag({ property: 'og:title', content: data.ogTitle });
        }
        else {
          this.metaService.removeTag("property='og:title'");
        }

        if (data.ogDescription) { //og:description
          this.metaService.updateTag({ property: 'og:description', content: data.ogDescription });
        } 
        else {
          this.metaService.removeTag("property='og:description'");
        }
      });

    });

  }

  /* METHODS */
  //Método para comprobar si la ruta actual tiene rutas hijas
  getChild(activatedRoute: ActivatedRoute): ActivatedRoute {

    if(activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    }
    else {
      return activatedRoute;
    }
  }
 
}
