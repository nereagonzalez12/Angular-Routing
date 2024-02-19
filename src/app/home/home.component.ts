import { Component, OnInit } from '@angular/core';
import { AlertService } from '../servicio/alert.service';
import { ProyectoServicioService } from '../servicio/proyecto-servicio.service';
import { observeNotification } from 'rxjs/internal/Notification';
import { Proyecto } from '../clases/proyecto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public arrayProyectos: Proyecto[] = [];

  constructor(private alerta: AlertService, private proycetoService: ProyectoServicioService) { //Inyectar el servicio en el constructor
    this.arrayProyectos = this.proycetoService.obtenerListaProyectos();
    console.log(this.arrayProyectos[0]);

  }

  eviarMensahe(menaje: string) {
    this.alerta.mostrarMensaje(menaje);
  }

  ngOnInit() {
    //this.alerta.mostrarMensaje("ngOnInit de HomeComponent");

  }
}
