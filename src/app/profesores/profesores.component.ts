import { Component, OnInit } from '@angular/core';
import { AccesoDatosService } from '../acceso-datos.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  profesores

  constructor(private basedatos:AccesoDatosService) { }

  ngOnInit(): void {
    this.profesores = this.basedatos.getProfesores().subscribe(
      (response)=> {
        console.log(response)
      },
      (error) => {

      }
    )
    
  }

}
