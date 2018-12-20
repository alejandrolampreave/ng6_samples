import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

enum state {Blank, FirstFigure, SecondFigure, Result}

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Output() signal = new EventEmitter<string>();
  currentState = state.Blank;

  constructor(public service: CalculatorService) { }

  ngOnInit() {
  }

  buttonFigure (num: number) {
    if (this.currentState === state.Blank || this.currentState === state.Result) {
      this.service.display = '';
      this.currentState = state.FirstFigure;
      this.service.firstFigure = num;
      this.service.display += num;
      this.signal.emit(this.service.display);
    } else if (this.currentState === state.FirstFigure) {
      this.service.firstFigure = this.service.firstFigure * 10 + num;
      this.service.display += num;
      this.signal.emit(this.service.display);
    } else if (this.currentState === state.SecondFigure) {
      this.service.secondFigure = this.service.secondFigure * 10 + num;
      this.service.display += num;
      this.signal.emit(this.service.display);
    }
  }

  buttonSymbol (symbol: string) {
    console.log('current state: ' + this.currentState);
    if (this.currentState === state.FirstFigure) {
      if (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
        this.service.operator = symbol;
        this.service.display += symbol;
        this.signal.emit(this.service.display);
        this.currentState = state.SecondFigure;
      }
    } else if (this.currentState === state.SecondFigure) {
      if (symbol === '=') {
        console.log('Resolve:');
        this.service.display += symbol + this.service.resolve();
        this.signal.emit(this.service.display);
        this.currentState = state.Result;
      }
    }
  }

}
