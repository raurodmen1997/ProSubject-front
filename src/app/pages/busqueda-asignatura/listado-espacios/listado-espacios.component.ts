import { Component, OnInit, Input } from '@angular/core';
import { EspacioService } from "../../../services/espacio/espacio.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-listado-espacios',
  templateUrl: './listado-espacios.component.html',
  styleUrls: ['./listado-espacios.component.css']
})
export class ListadoEspaciosComponent implements OnInit {

  @Input() espacios: any[];
  currentPage: number = 1;

  constructor(private espacioService: EspacioService,
    private router:Router) { }

  ngOnInit(): void {
  }

  detalleEspacio(id:number){
    this.router.navigate(['detalles-espacio', id])
  }

}
