import { Injectable } from '@angular/core';
import { Contraction } from './models';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ContractionHistoryService {
  contractions: Contraction[] = [];
  contractions$ = new BehaviorSubject<Contraction>(null);
  laborProgress$ = new BehaviorSubject<number>(0);

  addContraction(contraction: Contraction) {
    this.contractions$.next(contraction);
  }

  init() {
    this.loadFromLocalStorage();
    this.contractions$.subscribe(contraction => {
      if (contraction) {
        const lastContraction = this.contractions[this.contractions.length - 1];
        const secondsSince = lastContraction ? Math.round((contraction.startTime - lastContraction.endTime) / 1000) : 0;
        contraction.timeSince = this.calculateTimeSince(secondsSince);
        contraction.secondsSince = secondsSince;
        this.contractions.push(contraction);
        this.saveToLocalStorage();
        this.calculateLaborProgress();
      }
    });
  }

  calculateLaborProgress() {
    const beginning = 20 * 60;
    const end = 5 * 60;
    const lastSecondsSince = this.contractions[this.contractions.length - 1].secondsSince;
    const gap = beginning - end;
    const count = gap - (lastSecondsSince - end);
    
    if (lastSecondsSince < end && lastSecondsSince !== 0) {
      this.laborProgress$.next(100);
    } else if (lastSecondsSince > beginning) {
      this.laborProgress$.next(0);
    } else {
      this.laborProgress$.next(Math.round(count / gap * 100));
    }
  }

  calculateTimeSince(secondsSince) {
    if (secondsSince === 0) {
      return 'N/A';
    } else {
      const date = new Date(null);
      date.setSeconds(secondsSince);
      const timeString = date.toISOString().substr(11, 8);
      return `${timeString}`;
    }
  }

  loadFromLocalStorage() {
    this.contractions = JSON.parse(window.localStorage.contractions || '[]').map(c => new Contraction(c));
  }

  saveToLocalStorage() {
    window.localStorage.contractions = JSON.stringify(this.contractions);
  }

  clearLocalStorage() {
    window.localStorage.contractions = '';
    this.contractions = [];
  }
}