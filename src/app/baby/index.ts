import { BabyComponent } from './baby.component';
import { NgModule } from '@angular/core';
import { routing } from './baby.routing';
import { MaterialModule } from '../material';

@NgModule({
  imports: [
    routing,
    MaterialModule
  ],
  declarations: [
    BabyComponent
  ],
  providers: [
  ]
})
export class BabyModule {}