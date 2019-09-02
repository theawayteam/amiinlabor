import { Component } from '@angular/core';
import { ContractionHistoryService } from '../contraction-history.service';

@Component({
  selector: 'labor-progress',
  templateUrl: './labor-progress.component.html',
  styleUrls: ['./labor-progress.component.scss']
})
export class LaborProgressComponent {
  constructor(
    private $contractionHistory: ContractionHistoryService
  ) {}
}