import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobinspectionRoutingModule } from './jobinspection-routing.module';
import { JobinspectionComponent } from './jobinspection.component';
import { SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [JobinspectionComponent],
  imports: [
    CommonModule,
    SharedModule,
    JobinspectionRoutingModule
  ]
})
export class JobinspectionModule { }
