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
        this.contractions.push(contraction);
        this.saveToLocalStorage();
      }
    });
  }

  loadFromLocalStorage() {
    this.contractions = JSON.parse(window.localStorage.contractions || '[]').map(c => new Contraction(c));
  }

  saveToLocalStorage() {
    window.localStorage.contractions = JSON.stringify(this.contractions);
  }
}