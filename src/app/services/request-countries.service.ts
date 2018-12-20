import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestCountriesService {

  constructor(private http: HttpClient) { }

  getRequest(url: string = 'https://restcountries.eu/rest/v2/all'): Observable<any> {
    return this.http.get(url);
  }
}
