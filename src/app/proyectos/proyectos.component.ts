import { Component } from '@angular/core';
import { AlertService } from '../servicio/alert.service';
import { Proyecto } from '../clases/proyecto.model';
import { ProyectoServicioService } from '../servicio/proyecto-servicio.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  public inputNombre: string = '';
  public inputPresupuesto: string = '';
  public proyecto: Proyecto = new Proyecto();
  public listaProyecto: Proyecto[] = new Array<Proyecto>();

  constructor(private ruta: Router, private alerta: AlertService, private proyectoService: ProyectoServicioService) { //Inyectar el servicio en el constructor

  }

  eviarMensahe(menaje: string) {
    this.alerta.mostrarMensaje(menaje);
  }

  ngOnInit() {
    //this.alerta.mostrarMensaje("ngOnInit de ProyectoComponent");
  }

  agregar() {
    this.proyecto.nombre = this.inputNombre;
    this.proyecto.presupuesto = this.inputPresupuesto;
    this.proyectoService.crearProyecto(this.proyecto);

    //Navegar a otro componente por código.
    this.ruta.navigate(['']);
  }
}
