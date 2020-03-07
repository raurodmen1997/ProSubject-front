import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/shared/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public header_service: HeaderService) { }

  ngOnInit() {
  }

}
