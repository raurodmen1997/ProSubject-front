import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {filter, map} from 'rxjs/operators'

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {


  titulo:string;
  constructor(private router: Router, private title:Title) {

    this.getDataRouter().subscribe(data=>{

      this.titulo = data.titulo;
      this.title.setTitle(this.titulo);
      console.log(data);
    });

   }

  ngOnInit() {
  }


  getDataRouter(){
    return this.router.events.pipe(

      filter(evento => evento instanceof ActivationEnd),
      filter((evento:ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento:ActivationEnd) => evento.snapshot.data)

    );
  }
}
