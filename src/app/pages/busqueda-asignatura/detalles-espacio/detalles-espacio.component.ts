import { Component, OnInit } from '@angular/core';
import { EspacioService } from "../../../services/espacio/espacio.service";


@Component({
  selector: 'app-detalles-espacio',
  templateUrl: './detalles-espacio.component.html',
  styleUrls: ['./detalles-espacio.component.css']
})
export class DetallesEspacioComponent implements OnInit {

  espacio: any = {};

  constructor(private espacioService: EspacioService) { }

  ngOnInit() {

    this.espacioService.getEspaciosPorId(1).subscribe(
      res => {
        this.espacio = res,
      console.log(this.espacio)
    },
      error => console.log(error)
    )
  }

}
