import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobinspectionComponent } from './jobinspection.component';

const routes: Routes = [{ path: '', component: JobinspectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobinspectionRoutingModule { }
