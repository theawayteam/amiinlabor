import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatTableModule,
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatTableModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }