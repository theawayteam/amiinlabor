import { Component, ViewChild } from '@angular/core';
import { Contraction } from '../models';
import { ContractionHistoryService } from '../contraction-history.service';

@Component({
  selector: 'tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss'] 
})
export class TrackingComponent {
  displayedColumns: string[] = ['index', 'startTime', 'endTime', 'duration'];

  constructor(
    private $contractionHistory: ContractionHistoryService
  ) {
  }
}