import { Component, OnInit, Input } from '@angular/core';
import { EspacioService } from "../../../services/espacio/espacio.service";

@Component({
  selector: 'app-listado-espacios',
  templateUrl: './listado-espacios.component.html',
  styleUrls: ['./listado-espacios.component.css']
})
export class ListadoEspaciosComponent implements OnInit {

  @Input() espacios: any[];

  constructor(private espacioService: EspacioService) { }

  ngOnInit(): void {
    /*
    this.espacioService.getEspacios().subscribe(

      res => {this.espacios = res;
        console.log(this.espacios)},
        
      erro => console.log(erro)
    )
    */
  }

}
