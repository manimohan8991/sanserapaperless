import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChecksheetComponent } from './checksheet.component';

const routes: Routes = [{ path: '', component: ChecksheetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChecksheetRoutingModule { }
