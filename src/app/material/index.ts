import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatProgressBarModule,
  MatSelectModule
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatProgressBarModule,
  MatSelectModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }