import { Component, OnInit } from '@angular/core';
import { EspacioService } from 'src/app/services/services.index';

@Component({
  selector: 'app-espacios-alumno',
  templateUrl: './espacios-alumno.component.html',
  styles: []
})
export class EspaciosAlumnoComponent implements OnInit {


  espacios:any[];

  
  constructor(private espaciosService:EspacioService) { }

  ngOnInit() {

    this.espaciosService.getEspaciosPorEstudiante(JSON.parse(localStorage.getItem('usuario')).id).subscribe(data=>{
      this.espacios = data;
      console.log(this.espacios);
    });

  }

}
