import { Component, OnInit } from '@angular/core';
import { QuienesServicioService } from '../servicio/quienes-servicio.service';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {
  public inputIdGet: number = 0;
  constructor(public servicio: QuienesServicioService) { }
}

