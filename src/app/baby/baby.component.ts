import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.scss']
})
export class BabyComponent {
  constructor(
    private $theme: ThemeService
  ) {}

}