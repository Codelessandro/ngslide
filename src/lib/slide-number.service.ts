import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideNumberService {

  number: number = 0;

  constructor() {
  }

  getNumber() {
    this.number += 1;
    return this.number;
  }


}
