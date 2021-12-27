import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ManagementComponent],
  imports: [
    CommonModule,
    SharedModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
