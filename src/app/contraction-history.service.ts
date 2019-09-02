import { Injectable } from '@angular/core';
import { Contraction } from './models';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ContractionHistoryService {
  contractions: Contraction[] = [];
  contractions$ = new BehaviorSubject<Contraction>(null);

  addContraction(contraction: Contraction) {
    this.contractions$.next(contraction);
  }

  init() {
    this.loadFromLocalStorage();
    this.contractions$.subscribe(contraction => {
      if (contraction) {
        const lastContraction = this.contractions[this.contractions.length - 1];
        const millisecondsSince = lastContraction ? contraction.startTime - lastContraction.endTime : 0;
        contraction.timeSince = this.calculateTimeSince(millisecondsSince);
        this.contractions.push(contraction);
        this.saveToLocalStorage();
      }
    });
  }

  calculateTimeSince(millisecondsSince) {
    if (millisecondsSince === 0) {
      return 'N/A';
    } else {
      const secondsSince = Math.round(millisecondsSince / 1000);
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
}