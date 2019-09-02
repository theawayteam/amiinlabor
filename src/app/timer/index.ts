import { TimerComponent } from './timer.component';
import { NgModule } from '@angular/core';
import { routing } from './timer.routing';
import { MaterialModule } from '../material';

@NgModule({
  imports: [
    routing,
    MaterialModule
  ],
  declarations: [
    TimerComponent
  ],
  providers: [
  ]
})
export class TimerModule {}