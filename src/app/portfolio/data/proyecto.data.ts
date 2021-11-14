import { Proyecto } from "../interfaces/proyecto.interface";


//Array de objetos con los datos de cada proyecto a mostrar
export const PROYECTOS: Proyecto[] = [    
    {
        titulo: 'Home Page con Bootstrap 5',
        descripcion: 'Realizo el layout y prototipado de una home page mediante Bootstrap 5.',
        tecnologias: 'HTML5 | Bootstrap 5',
        imagen: '../../../../assets/images/proyectos/bootstrap-main-page.jpg',
        enlacePagina: 'https://davidcastri25.github.io/m6-bootstrap-lvl1/',
        enlaceCodigo: 'https://github.com/davidcastri25/m6-bootstrap-lvl1.git'
    },
    {
        titulo: 'Prueba técnica IT Academy',
        descripcion: 'App que valida los comandos introducidos para mover un rover en Marte.',
        tecnologias: 'Angular | Bootstrap 5',
        imagen: '../../../../assets/images/proyectos/prova-tecnica.jpg',
        enlacePagina: '',
        enlaceCodigo: 'https://github.com/davidcastri25/angular-prova-tecnica-itacademy.git'
    },
    {
        titulo: 'App de Registro de Coches',
        descripcion: 'App donde se pide al usuario la información para generar un coche mediante formulario validado.',
        tecnologias: 'HTML5 | Bootstrap 5 | TypeScript',
        imagen: '../../../../assets/images/proyectos/vehiculos-ts.jpg',
        enlacePagina: '',
        enlaceCodigo: 'https://github.com/davidcastri25/m7-1.1-typescriptVehicles.git'
    },
    {
        titulo: 'Calculadora con JavaScript',
        descripcion: 'Programo calculadora mediante JavaScript.',
        tecnologias: 'HTML5 | CSS3 | JavaScript',
        imagen: '../../../../assets/images/proyectos/calculadora-js.jpg',
        enlacePagina: 'https://davidcastri25.github.io/m7.1-javascriptBasic-lvl2-3/',
        enlaceCodigo: 'https://github.com/davidcastri25/m7.1-javascriptBasic-lvl2-3.git'
    },
    {
        titulo: 'Generador de Chistes',
        descripcion: 'App que llama a la API requerida y devuelve un chiste. Llamada a la API realizada mediante jQuery AJAX.',
        tecnologias: 'HTML5 | SASS | jQuery',
        imagen: '../../../../assets/images/proyectos/api-jquery.jpg',
        enlacePagina: '',
        enlaceCodigo: 'https://github.com/davidcastri25/m9-ajaxAPI-lvl1-lvl2.git'
    },
    {
        titulo: 'Animación CSS - Pelota de Tenis',
        descripcion: 'Animación de pelota mediante CSS.',
        tecnologias: 'HTML5 | CSS3',
        imagen: '../../../../assets/images/proyectos/animacion-css.jpg',
        enlacePagina: 'https://davidcastri25.github.io/m4-animacio-pilota-lvl2/',
        enlaceCodigo: 'https://github.com/davidcastri25/m4-animacio-pilota-lvl2.git'
    }
];