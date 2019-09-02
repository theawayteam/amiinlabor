import { TimerComponent } from './timer.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TimerComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
