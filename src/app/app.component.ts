import { Component, OnInit } from '@angular/core';
import { ContractionHistoryService } from './contraction-history.service';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navClasses = 'nav';

  constructor(
    private $contractionHistory: ContractionHistoryService,
    private $theme: ThemeService
  ) {}

  ngOnInit() {
    this.$contractionHistory.init();
    this.$theme.init();
    this.$theme.theme$.subscribe(theme => this.setTheme(theme));
  }

  setTheme(theme) {
    document.body.classList.remove('neutral-theme');
    document.body.classList.remove('girl-theme');
    document.body.classList.remove('boy-theme');
    document.body.classList.add(theme);
    this.navClasses = `nav ${theme}`;
  }
}
