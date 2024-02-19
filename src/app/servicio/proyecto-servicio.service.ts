import { Injectable } from '@angular/core';
import { Proyecto } from '../clases/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoServicioService {
  public arrayProyecto: Proyecto[] = [];

  crearProyecto(p: Proyecto) {
    this.arrayProyecto.push(p);
  }

  obtenerListaProyectos(): Proyecto[] {
    return this.arrayProyecto;
  }
}
