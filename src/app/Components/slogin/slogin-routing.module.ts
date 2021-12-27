import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SloginComponent } from './slogin.component';

const routes: Routes = [{ path: '', component: SloginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SloginRoutingModule { }
