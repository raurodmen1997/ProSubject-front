import { Component, OnInit } from '@angular/core';
import { HorarioService } from 'src/app/services/horario/horario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  horarios: any[]
  espacioId:number

  constructor(private horarioService: HorarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramas=>{
      this.espacioId = parseInt(paramas.get('id'), 10);
      if(paramas.has('id')){
          this.horarioService.getHorariosDeEspacio(this.espacioId).subscribe(
            res => {
              this.horarios = res
            this.formatearFecha()
          }
        )
      }
    });
  }

  formatearFecha(){
    this.horarios.forEach(element => {
      let horaInicio = element.fechaInicio.split(':');
      element.fechaInicio = horaInicio[0]+':'+horaInicio[1]

      let horaFin = element.fechaFin.split(':');
      element.fechaFin = horaFin[0]+':'+horaFin[1]
    })
  }

  volverDetallesEspacio(id){
    this.router.navigate(['detalles-espacio', id])
  }

}
