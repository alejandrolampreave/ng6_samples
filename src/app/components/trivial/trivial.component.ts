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
  counter: number = 0;

  constructor(public service: RequestCountriesService) { }

  ngOnInit() {
    this.service.getRequest('https://opentdb.com/api.php?amount=10').subscribe(
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

  processAnswer(correct: boolean) {
    if (correct) {
      this.counter += 20;
    } else {
      this.counter = 0;
    }
  }

}
