export class LibrosService {
  private libros = [
    'libro magico',
    'libro triste',
    'libro feo',
  ];

  agregarLibro(nombre:string){
    this.libros.push(nombre);
  }

  obtenerLibros(){
    return [...this.libros]
  }


}
