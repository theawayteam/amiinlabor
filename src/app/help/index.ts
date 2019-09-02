import { HelpComponent } from './help.component';
import { NgModule } from '@angular/core';
import { routing } from './help.routing';

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    HelpComponent
  ],
  providers: [
  ]
})
export class HelpModule {}