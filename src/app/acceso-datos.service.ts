import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccesoDatosService {

  private url = "http://my-json-server.typicode.com/luismiguel-fernandez/angular/"

  constructor(private http:HttpClient) { }

  getProfesores() {
    return this.http.get(this.url+"profesores")
  }

  getModulos() {

  }

  getExamenes() {

  }
}
