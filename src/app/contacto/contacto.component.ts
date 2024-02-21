import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { QuienesServicioService } from '../servicio/quienes-servicio.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {


  constructor(private ruta: Router, public servicio: QuienesServicioService) { }
  volverAlHome(): void {
    this.ruta.navigate(['']);
  };

}
