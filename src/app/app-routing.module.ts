import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'timer',
    pathMatch: 'full'
  }, {
    path: 'timer',
    loadChildren: () => import('./timer/').then(mod => mod.TimerModule)
  }, {
    path: 'tracking',
    loadChildren: () => import('./tracking/').then(mod => mod.TrackingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
