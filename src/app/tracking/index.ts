import { TrackingComponent } from './tracking.component';
import { NgModule } from '@angular/core';
import { routing } from './tracking.routing';
import { MaterialModule } from '../material';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    routing,
    MaterialModule,
    CommonModule
  ],
  declarations: [
    TrackingComponent
  ],
  providers: [
  ]
})
export class TrackingModule {}