import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newHero: Hero = new Hero();
  disableButton = true;

  constructor(public service: CommunicationService) { }


  ngOnInit() {
  }


  checkName () {
    if (this.newHero.name !== '') {
      this.disableButton = false;
    } else {
      this.disableButton = true;
    }
    this.disableButton = true;
  }
}
