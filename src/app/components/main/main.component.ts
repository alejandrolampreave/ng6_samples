import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {

  @Input() date: any;
  result: any = {};
  responded: boolean = false;

  constructor(public service: RequestService) { }

  ngOnInit() {
    this.service.signal.subscribe(
      data => this.processResult(data),
    );
    this.getApiInfo();
  }

  processResult(data: any) {
    this.result = data;
    this.responded = true;
  }

  ngOnChanges(): void {
    this.getApiInfo(this.date);
  }

  getApiInfo(date?: any) {
    if (date) {
      this.service.getRequest(this.service.baseURL + '&date=' +
      date.year + '-' +
      date.month + '-' +
      date.day);
    } else {
      this.service.getRequest();
    }
  }
}
