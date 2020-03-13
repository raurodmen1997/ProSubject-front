import { Component, OnInit } from '@angular/core';
import { EspacioService } from "../../../services/espacio/espacio.service";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-detalles-espacio',
  templateUrl: './detalles-espacio.component.html',
  styleUrls: ['./detalles-espacio.component.css']
})
export class DetallesEspacioComponent implements OnInit {

  espacio: any = {};

  constructor(private espacioService: EspacioService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;

    this.espacioService.getEspaciosPorId(params.id).subscribe(
      res => {
        this.espacio = res,
      console.log(this.espacio)
    },
      error => console.log(error)
    )
  }

  irBusquedaAsignaturas(){
    this.router.navigate(['busqueda-asignatura']);
  }

}
