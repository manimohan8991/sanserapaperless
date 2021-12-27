import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard} from '../app/Service/core/authentication/auth.guard';
    
   
const routes: Routes = [
  
  
{ path: '', loadChildren: () => import('./Components/slogin/slogin.module').then(m => m.SloginModule) },
  
    
]
    
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }