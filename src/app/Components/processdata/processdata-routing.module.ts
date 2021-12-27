import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessdataComponent } from './processdata.component';

const routes: Routes = [{ path: '', component: ProcessdataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessdataRoutingModule { }
