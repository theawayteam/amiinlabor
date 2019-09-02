import { TrackingComponent } from './tracking.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TrackingComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
