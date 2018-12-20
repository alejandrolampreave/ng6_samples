import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(public service: CommunicationService) { }

  ngOnInit() {
  }

}
