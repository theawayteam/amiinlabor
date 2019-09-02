import { BabyComponent } from './baby.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: BabyComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
