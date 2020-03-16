import { Component, OnInit } from '@angular/core';
import { EspacioService } from "../../../services/espacio/espacio.service";
import { Router, ActivatedRoute } from "@angular/router";
import { HorarioService } from 'src/app/services/horario/horario.service';


@Component({
  selector: 'app-detalles-espacio',
  templateUrl: './detalles-espacio.component.html',
  styleUrls: ['./detalles-espacio.component.css']
})
export class DetallesEspacioComponent implements OnInit {

  espacio: any = {};

  espacioId:number;

  logueado:boolean = false;

  horarios: any = [];

  constructor(private espacioService: EspacioService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private horarioService: HorarioService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramas=>{
      this.espacioId = parseInt(paramas.get('id'), 10);
      if(paramas.has('id')){
        this.espacioService.getEspaciosPorId(parseInt(paramas.get('id'), 10)).subscribe(data=>{
          this.espacio = data;
          console.log(this.espacio);

          this.horarioService.getHorariosDeEspacio(this.espacioId).subscribe(
            res => {this.horarios = res;
            console.log(this.horarios)
          }
          )
        });
      }

    });

  }


  irBusquedaAsignaturas(){
    this.router.navigate(['busqueda-asignatura']);
  }

  insertarAlumno(){

    if(!localStorage.getItem('usuario')){
      this.router.navigateByUrl('/login');
    }else{
      console.log(this.espacioId);
      console.log(JSON.parse(localStorage.getItem('usuario')).id);
      this.espacioService.insertarAlumno(this.espacioId,JSON.parse(localStorage.getItem('usuario')).id).subscribe(data=>{
        console.log(data);
        this.router.navigateByUrl('/espacios-alumno');
      });
    }
  }

}
