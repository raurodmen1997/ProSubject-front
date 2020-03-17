import { Component, OnInit } from '@angular/core';
import { EspacioService } from 'src/app/services/services.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espacios-alumno',
  templateUrl: './espacios-alumno.component.html',
  styles: [`
  #parentCard{
    background-color: #ff7f26;
}`]
})
export class EspaciosAlumnoComponent implements OnInit {


  espacios:any[];

  
  constructor(private espaciosService:EspacioService,
    private router: Router) { }

  ngOnInit() {

    this.espaciosService.getEspaciosPorEstudiante(JSON.parse(localStorage.getItem('usuario')).id).subscribe(data=>{
      this.espacios = data;
      console.log(this.espacios);
    });

  }

  verHorarios(espacioId){
    this.router.navigate(['horariosAlumno', espacioId, JSON.parse(localStorage.getItem('usuario')).id])
  }

}
