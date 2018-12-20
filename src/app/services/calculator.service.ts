import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  display: string = '';
  firstFigure: number = 0;
  secondFigure: number = 0;
  operator: string = '';
  result: number = 0;

  constructor() { }

  resolve(): any {
    console.log('Primero: ' + this.firstFigure);
    console.log('Segundo: ' + this.secondFigure);
    if (this.operator === '+') {
      this.result = this.firstFigure + this.secondFigure;
      return this.result;
    } else if (this.operator === '-') {
      this.result = this.firstFigure - this.secondFigure;
      return this.result;

    } else if (this.operator === '*') {
      this.result = this.firstFigure * this.secondFigure;
      return this.result;

    } else if (this.operator === '/') {
      this.result = this.firstFigure / this.secondFigure;
      return this.result;

    }
  }

}
