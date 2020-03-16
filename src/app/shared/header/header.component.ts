import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/shared/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public header_service: HeaderService, private route:Router) { }

  ngOnInit() {
    
  }


  logout(){
    localStorage.removeItem('usuario');
    this.route.navigate(['/login']);

  }

}
