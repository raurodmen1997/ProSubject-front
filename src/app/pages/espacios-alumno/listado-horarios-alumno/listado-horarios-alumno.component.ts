import { Component, OnInit } from '@angular/core';
import { HorarioService } from 'src/app/services/horario/horario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listado-horarios-alumno',
  templateUrl: './listado-horarios-alumno.component.html',
  styleUrls: ['./listado-horarios-alumno.component.css']
})
export class ListadoHorariosAlumnoComponent implements OnInit {

  horarios: any[];
  espacioId: number;

  constructor(private horarioService: HorarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;
    this.horarioService.getHorariosPorEspacioAlumno(params.idEspacio, params.idAlumno).subscribe(
      res =>  {this.horarios = res
      this.formatearFecha()}
    )
  }

  formatearFecha(){
    this.horarios.forEach(element => {
      let horaInicio = element.fechaInicio.split(':');
      element.fechaInicio = horaInicio[0]+':'+horaInicio[1]

      let horaFin = element.fechaFin.split(':');
      element.fechaFin = horaFin[0]+':'+horaFin[1]
    })
  }

  volverMisEspacios(){
    this.router.navigate(['espacios-alumno']);
  }

}
