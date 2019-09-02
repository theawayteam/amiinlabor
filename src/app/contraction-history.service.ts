import { Injectable } from '@angular/core';
import { Contraction } from './models';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ContractionHistoryService {
  contractions: Contraction[] = [];
  contractions$ = new BehaviorSubject<Contraction>(null);

  addContraction(contraction: Contraction) {
    this.contractions$.next(contraction);
    this.contractions.push(contraction);
  }
}