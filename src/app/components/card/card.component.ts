import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() signal: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  buttonClicked (buttonIndex: number) {
    this.card.answered = true;
    this.card.answeredIndex = buttonIndex;
    if (this.card.answers[buttonIndex] === this.card.correct_answer) {
      this.signal.emit(true);
    } else {
      this.signal.emit(false);
    }
  }

  getClass (buttonIndex: number): string {
    if (this.card.answers[buttonIndex] === this.card.correct_answer) {
      return 'btn btn-large btn-block btn-success';
    } else if (this.card.answeredIndex === buttonIndex) {
      return 'btn btn-large btn-block btn-danger';
    }
    return 'btn btn-large btn-block btn-secundary';
  }

}
