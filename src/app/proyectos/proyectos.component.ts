import { Component } from '@angular/core';
import { AlertService } from '../servicio/alert.service';
import { Proyecto } from '../clases/proyecto.model';

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

  constructor(private alerta: AlertService) { //Inyectar el servicio en el constructor

  }

  eviarMensahe(menaje: string) {
    //this.alerta.mostrarMensaje(menaje);
  }

  ngOnInit() {
    //this.alerta.mostrarMensaje("ngOnInit de ProyectoComponent");
  }

  agregar() {

  }
}
