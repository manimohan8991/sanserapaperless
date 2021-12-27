import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SselectjobRoutingModule } from './sselectjob-routing.module';
import { SselectjobComponent } from './sselectjob.component';
import { SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [SselectjobComponent],
  imports: [
    CommonModule,
    SharedModule,
    SselectjobRoutingModule
  ]
})
export class SselectjobModule { }
