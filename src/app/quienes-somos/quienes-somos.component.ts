import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent implements OnInit {
  public resultadoPeticion: any;
  public url: string = 'https://jsonplaceholder.typicode.com/posts';
  public inputIdGet: string = '';
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.get();
  }
  get() {
    this.http.get(this.url)
      .subscribe(data => { this.resultadoPeticion = data; });
  }

  get2() {
    this.http.get(this.url + '/' + this.inputIdGet)
      .subscribe(data => {
        this.resultadoPeticion = data;
        this.resultadoPeticion.userId;
      });
  }
}
