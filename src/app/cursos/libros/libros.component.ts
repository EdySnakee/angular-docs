import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent implements OnInit, OnDestroy {

  libros:any = [];
  constructor(
    private librosService: LibrosService,
    ){}

    private libroSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.libros = this.librosService.obtenerLibros()
   this.libroSubscription = this.librosService.librosSubjet.subscribe(()=>{
      this.libros = this.librosService.obtenerLibros();
        })
  }

  eliminarLibro(lib:any){
    this.libros = this.libros.filter( (p:any) => p !== lib)
  }

  guardarLibro(f:any){
    if(f.valid){
      this.libros.push(f.value.nombreLibro)
    }
  }


ngOnDestroy(): void {
this.libroSubscription?.unsubscribe();
}

}
