import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit  {

  constructor(
    private libroService : LibrosService
  )
{}

ngOnInit(): void {

}


@Input() tituloLibro:string=''
@Output() libroClicked = new EventEmitter();



onClicked(){
  // this.libroClicked.emit();
  this.libroService.eliminarLibro(this.tituloLibro);
}

}
