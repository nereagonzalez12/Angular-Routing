import { Injectable } from '@angular/core';
import { Placeholder } from '../interfaces/placeholder';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuienesServicioService {
  public arrayUsuarios: Placeholder[] = [];
  public url: string = 'https://jsonplaceholder.typicode.com/posts';
  public resultadoPeticion: any;
  
  constructor(private http: HttpClient) {
    this.get();
  }

  get() {
    this.http.get(this.url)
      .subscribe(data => { this.resultadoPeticion = data; });
  }

  get2(id: number) {
    this.http.get<Placeholder>(this.url + '/' + id)
      .subscribe(data => {
        this.resultadoPeticion = data;
        console.log(this.resultadoPeticion.body);
        console.log(this.resultadoPeticion.title);
        console.log(this.resultadoPeticion.id);
        console.log(this.resultadoPeticion.userId);
      });
  }

  get3(id: number) {
    this.http.get<Placeholder>(this.url + '/' + id)
      .subscribe(
        {
          next: (respuesta: Placeholder) => {
            this.resultadoPeticion = respuesta;
            console.log(this.resultadoPeticion.body);
            console.log(this.resultadoPeticion.title);
            console.log(this.resultadoPeticion.id);
            console.log(this.resultadoPeticion.userId);
          },
          error: (err) => {
            console.log('error');

          }
        });
  }

  post() {
    this.http.post(this.url,
      {
        userId: 2,
        id: 209,
        title: 'nuevo titulo',
        body: 'nuevo cuerpo'
      }).subscribe(data => { this.resultadoPeticion = data; });
  }

  put() {
    this.http.put(this.url + '/10',
      {
        userId: 2,
        title: 'nuevo titulo',
        body: 'nuevo cuerpo'
      }).subscribe(data => { this.resultadoPeticion = data; });
  }

  patch() {
    this.http.patch(this.url + '/10',
      {
        userId: 2,
        title: 'nuevo titulo',
        body: 'nuevo cuerpo'
      }).subscribe(data => { this.resultadoPeticion = data; });
  }

  delete() {
    this.http.delete(this.url + '/10')
      .subscribe(data => { this.resultadoPeticion = data; });
  }

}

