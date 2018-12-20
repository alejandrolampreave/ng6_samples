import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
