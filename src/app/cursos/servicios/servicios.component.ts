import { Component } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  libros:any= '';

constructor(
  private librosService: LibrosService
){
  this.libros = librosService.obtenerLibros();
}





}
