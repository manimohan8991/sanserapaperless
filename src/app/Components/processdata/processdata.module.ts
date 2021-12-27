import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessdataRoutingModule } from './processdata-routing.module';
import { ProcessdataComponent } from './processdata.component';
import { SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ProcessdataComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProcessdataRoutingModule
  ]
})
export class ProcessdataModule { }
