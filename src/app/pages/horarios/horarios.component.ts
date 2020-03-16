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
            res => {this.horarios = res;
            console.log(this.horarios)
          }
          )
      }

    });
  }

  volverDetallesEspacio(id){
    this.router.navigate(['detalles-espacio', id])
  }

}
