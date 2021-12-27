import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsetupComponent } from './jobsetup.component';

const routes: Routes = [{ path: '', component: JobsetupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsetupRoutingModule { }
