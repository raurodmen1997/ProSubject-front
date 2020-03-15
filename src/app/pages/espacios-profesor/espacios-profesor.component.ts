import { Component, OnInit } from '@angular/core';
import { EspacioService } from 'src/app/services/services.index';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-espacios-profesor',
  templateUrl: './espacios-profesor.component.html',
  styles: []
})
export class EspaciosProfesorComponent implements OnInit {


  espacios:any[];

  constructor(private espaciosService:EspacioService, private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    /*
    this.activateRoute.paramMap.subscribe(paramas=>{

      if(paramas.has('id')){
        this.espaciosService.getEspaciosPorProfesor(parseInt(paramas.get('id'), 10)).subscribe(data=>{
          this.espacios = data;
          console.log(this.espacios);
        });
      }

    });
    */
    this.espaciosService.getEspaciosPorProfesor(JSON.parse(localStorage.getItem('usuario')).id).subscribe(data=>{
      this.espacios = data;
      console.log(this.espacios);
    });

    
  }

}
