import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsetupRoutingModule } from './jobsetup-routing.module';
import { JobsetupComponent } from './jobsetup.component';
import { SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [JobsetupComponent],
  imports: [
    CommonModule,
    SharedModule,
    JobsetupRoutingModule
  ]
})
export class JobsetupModule { }
