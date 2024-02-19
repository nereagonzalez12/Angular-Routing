import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { HomeComponent } from './home/home.component';
import { AlertService } from './servicio/alert.service';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { ProyectoServicioService } from './servicio/proyecto-servicio.service';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    HomeComponent,
    QuienesSomosComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgModule

  ],
  providers: [AlertService, ProyectoServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
