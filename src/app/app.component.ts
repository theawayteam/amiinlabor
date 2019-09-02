import { Component, OnInit } from '@angular/core';
import { ContractionHistoryService } from './contraction-history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'amiinlabor';

  constructor(
    private $contractionHistory: ContractionHistoryService
  ) {}

  ngOnInit() {
    this.$contractionHistory.init();
  }
}
