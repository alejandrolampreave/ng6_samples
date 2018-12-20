import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  signal: EventEmitter<any> = new EventEmitter<any>();
  public responded: boolean = false;
  public result: any = {};
  public baseURL: string = 'https://api.nasa.gov/planetary/apod?api_key=tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6';

  constructor(private httpClient: HttpClient) { }

  getRequest (url?: string): void {
    if (url) {
      this.httpClient.get(url).subscribe(
        data => this.processResult(data),
        error => this.processError(error),
        () => this.processFinal()
      );
    } else {
      this.httpClient.get(this.baseURL).subscribe(
        data => this.processResult(data),
        error => this.processError(error),
        () => this.processFinal()
      );
    }
  }

  processResult(data: any) {
    console.log(data);
    this.result = data;
    this.responded = true;
    this.signal.emit(this.result);
  }

  processError(error: any) {
  }

  processFinal() {}

}
