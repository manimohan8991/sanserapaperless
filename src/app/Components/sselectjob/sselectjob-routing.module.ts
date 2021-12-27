import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SselectjobComponent } from './sselectjob.component';

const routes: Routes = [{ path: '', component: SselectjobComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SselectjobRoutingModule { }
