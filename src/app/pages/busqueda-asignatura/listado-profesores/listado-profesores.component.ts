import { Component, OnInit } from '@angular/core';
import { EspacioService } from "../../../services/espacio/espacio.service";

@Component({
  selector: 'app-listado-profesores',
  templateUrl: './listado-profesores.component.html',
  styleUrls: ['./listado-profesores.component.css']
})
export class ListadoProfesoresComponent implements OnInit {

  espacios: any[];

  constructor(private espacioService: EspacioService) { }

  ngOnInit(): void {
    this.espacioService.getEspacios().subscribe(

      res => {this.espacios = res;
        console.log(this.espacios)},
        
      erro => console.log(erro)
    )
  }

}
