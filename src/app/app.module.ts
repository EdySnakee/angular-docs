import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiciosComponent } from './cursos/servicios/servicios.component';
import { HomeComponent } from './vistas/home/home.component';
import { LibrosService } from './services/libros.service';
import { LibrosComponent } from './cursos/libros/libros.component';
import { LibroComponent } from './cursos/libro/libro.component';
import { InicioComponent } from './inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MateriasModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    HomeComponent,
    LibrosComponent,
    LibroComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MateriasModule
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
