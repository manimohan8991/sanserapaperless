import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SloginRoutingModule } from './slogin-routing.module';
import { SloginComponent } from './slogin.component';


@NgModule({
  declarations: [SloginComponent],
  imports: [
    CommonModule,
    SloginRoutingModule
  ]
})
export class SloginModule { }
