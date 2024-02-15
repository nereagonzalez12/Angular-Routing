import { Component } from '@angular/core';
import { AlertService } from '../servicio/alert.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  constructor(private alerta: AlertService) { //Inyectar el servicio en el constructor

  }

  eviarMensahe(menaje: string) {
    //this.alerta.mostrarMensaje(menaje);
  }

  ngOnInit() {
    //this.alerta.mostrarMensaje("ngOnInit de ProyectoComponent");
  }
}
