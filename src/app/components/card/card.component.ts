import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  constructor() { }

  ngOnInit() {
  }

  buttonClicked (buttonIndex: number) {
    this.card.answered = true;
    this.card.answeredIndex = buttonIndex;
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
