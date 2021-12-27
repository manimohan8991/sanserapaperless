import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChecksheetRoutingModule } from './checksheet-routing.module';
import { ChecksheetComponent } from './checksheet.component';

import { SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [ChecksheetComponent],
  imports: [
    CommonModule,
    SharedModule,
    ChecksheetRoutingModule
  ]
})
export class ChecksheetModule { }
