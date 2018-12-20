import { Component, OnInit } from '@angular/core';

enum state {Blank, FirstFigure, SecondFigure, Result}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {
  display: string;


  constructor() { }

  ngOnInit() {
  }

  processSignal (myInput: string) {
    this.display = myInput;
  }

}
