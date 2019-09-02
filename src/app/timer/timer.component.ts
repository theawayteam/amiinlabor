import { Component } from '@angular/core';
import { Contraction } from '../models';
import { ContractionHistoryService } from '../contraction-history.service';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'] 
})
export class TimerComponent {
  timerActive = false;
  contraction: Contraction = null;

  constructor(
    private $contractionHistory: ContractionHistoryService
  ) {}

  startTimer() {
    this.contraction = new Contraction({
      index: this.$contractionHistory.contractions.length + 1,
      startTime: Date.now()
    });
    this.timerActive = true;
  }

  stopTimer() {
    this.contraction.endTime = Date.now();
    this.$contractionHistory.addContraction(this.contraction);
    this.contraction = null;
    this.timerActive = false;
  }
}