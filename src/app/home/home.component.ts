import { Component, OnInit } from '@angular/core';
import { AlertService } from '../servicio/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private alerta: AlertService) { //Inyectar el servicio en el constructor

  }

  eviarMensahe(menaje: string) {
    //this.alerta.mostrarMensaje(menaje);
  }

  ngOnInit() {
    //this.alerta.mostrarMensaje("ngOnInit de HomeComponent");
  }
}
