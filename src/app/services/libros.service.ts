import { Subject } from "rxjs";

export class LibrosService {

  librosSubjet = new Subject();


  private libros = [
    'libro magico',
    'libro triste',
    'libro feo',
  ];

  agregarLibro(nombre:string){
    this.libros.push(nombre);
    this.librosSubjet.next(nombre);
  }


  eliminarLibro(nombre:string){
    this.libros = this.libros.filter(x => x !== nombre );
    this.librosSubjet.next(nombre);
  }

  obtenerLibros(){
    return [...this.libros]
  }


}
