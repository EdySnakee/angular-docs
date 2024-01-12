import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent implements OnInit {

  libros:any = [];
  constructor(
    private librosService: LibrosService
  ){}

  ngOnInit(): void {
    this.libros = this.librosService.obtenerLibros()
  }

  getLibros(){}

}
