import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ThemeService {
  theme = 'neutral-theme';
  theme$ = new BehaviorSubject<string>('neutral-theme');

  init() {
    const theme = window.localStorage.theme || 'neutral-theme';
    this.theme$.next(theme);
    this.theme = theme;
  }

  setTheme(theme) {
    this.theme = theme;
    window.localStorage.theme = theme;
    this.theme$.next(theme);
  }
}