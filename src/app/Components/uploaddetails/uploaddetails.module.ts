import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploaddetailsRoutingModule } from './uploaddetails-routing.module';
import { UploaddetailsComponent } from './uploaddetails.component';
import { SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [UploaddetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    UploaddetailsRoutingModule
  ]
})
export class UploaddetailsModule { }
