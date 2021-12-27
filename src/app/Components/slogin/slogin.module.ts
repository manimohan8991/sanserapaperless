import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SloginRoutingModule } from './slogin-routing.module';
import { SloginComponent } from './slogin.component';
import { SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [SloginComponent],
  imports: [
    CommonModule,
    SharedModule,
    SloginRoutingModule
  ]
})
export class SloginModule { }
