import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    HeaderService
 } from './services.index';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    HeaderService
  ],
  declarations: []
})
export class ServiceModule { }
