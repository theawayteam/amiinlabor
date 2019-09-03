import { Component, OnInit } from '@angular/core';
import { ContractionHistoryService } from '../contraction-history.service';
import { Contraction } from '../models';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'labor-progress',
  templateUrl: './labor-progress.component.html',
  styleUrls: ['./labor-progress.component.scss']
})
export class LaborProgressComponent implements OnInit {
  progressText = '';
  lastContraction: Contraction = null;

  constructor(
    private $contractionHistory: ContractionHistoryService,
    private $theme: ThemeService
  ) {}

  ngOnInit() {
    this.$contractionHistory.laborProgress$.subscribe(this.updateProgressText.bind(this)) 
    this.$contractionHistory.contractions$.subscribe(contraction => {
      this.lastContraction = contraction;
    });
  }

  updateProgressText(progress) {
    if (progress === 0) {
      this.progressText = 'Here we go!';
    } else if (progress <= 25) {
      this.progressText = `Don't forget to eat!`;
    } else if (progress <= 50) {
      this.progressText = `Put on a movie, you're doing great!`;
    } else if (progress <= 90) {
      this.progressText = 'Try relaxing with a warm shower or bath';
    } else {
      this.progressText = `Get your bag, it's time to go!`;
    }
  }
}