import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploaddetailsComponent } from './uploaddetails.component';

const routes: Routes = [{ path: '', component: UploaddetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploaddetailsRoutingModule { }
