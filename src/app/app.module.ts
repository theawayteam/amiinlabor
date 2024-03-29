import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material';
import { ContractionHistoryService } from './contraction-history.service';
import { ThemeService } from './theme.service';
import { LaborProgressComponent } from './labor-progress/labor-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    LaborProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    ContractionHistoryService,
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
