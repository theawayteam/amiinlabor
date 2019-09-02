import { HelpComponent } from './help.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HelpComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
