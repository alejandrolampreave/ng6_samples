import { Component, OnInit } from '@angular/core';
import { RequestCountriesService } from 'src/app/services/request-countries.service';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-trivial',
  templateUrl: './trivial.component.html',
  styleUrls: ['./trivial.component.css']
})
export class TrivialComponent implements OnInit {
  result: any;
  responded: boolean  = false;
  cards: Array<Card> = new Array<Card>();

  constructor(public service: RequestCountriesService) { }

  ngOnInit() {
    this.service.getRequest('https://opentdb.com/api.php?amount=1').subscribe(
      data => this.processResult(data),
      error => this.processError(error),
      () => this.processFinal()
    );
  }

  processResult(data: any) {
    console.log(data);
    this.result = data;
    this.responded = true;
    for (const item of this.result.results) {
      this.cards.push(new Card(item));
    }
  }

  processError(error: any) {
    console.error(error);
  }

  processFinal() {}

  buttonClicked (cardIndex: number, buttonIndex: number) {
    this.cards[cardIndex].answered = true;
    this.cards[cardIndex].answeredIndex = buttonIndex;
  }

  getClass (cardIndex: number, buttonIndex: number): string {
    if (this.cards[cardIndex].answers[buttonIndex] === this.cards[cardIndex].correct_answer) {
      return 'btn btn-large btn-block btn-success';
    } else if (this.cards[cardIndex].answeredIndex === buttonIndex) {
      return 'btn btn-large btn-block btn-danger';
    }
    return 'btn btn-large btn-block btn-secundary';
  }

}
