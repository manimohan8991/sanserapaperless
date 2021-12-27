import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard} from '../app/Service/core/authentication/auth.guard';
    
   
const routes: Routes = [
  
  
{ path: '', loadChildren: () => import('./Components/slogin/slogin.module').then(m => m.SloginModule) },
  
  
{ path: 'sselectjob', loadChildren: () => import('./Components/sselectjob/sselectjob.module').then(m => m.SselectjobModule) },
  
  
{ path: 'operation', loadChildren: () => import('./Components/operation/operation.module').then(m => m.OperationModule) },
  
  
{ path: 'management', loadChildren: () => import('./Components/management/management.module').then(m => m.ManagementModule) },
  
  
{ path: 'checksheet', loadChildren: () => import('./Components/checksheet/checksheet.module').then(m => m.ChecksheetModule) },
  
  
{ path: 'jobsetup', loadChildren: () => import('./Components/jobsetup/jobsetup.module').then(m => m.JobsetupModule) },
  
  
{ path: 'jobinspection', loadChildren: () => import('./Components/jobinspection/jobinspection.module').then(m => m.JobinspectionModule) },
  
  
{ path: 'processdata', loadChildren: () => import('./Components/processdata/processdata.module').then(m => m.ProcessdataModule) },
  
  
{ path: 'upload', loadChildren: () => import('./Components/upload/upload.module').then(m => m.UploadModule) },
  
  
{ path: 'uploaddetails', loadChildren: () => import('./Components/uploaddetails/uploaddetails.module').then(m => m.UploaddetailsModule) },
  
  
    
]
    
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }