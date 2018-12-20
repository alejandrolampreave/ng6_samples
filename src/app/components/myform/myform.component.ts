import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/model/user';
import { RequestCountriesService } from 'src/app/services/request-countries.service';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject, Observable, merge } from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  ccaa = ['Madrid', 'Castilla la Mancha'];
  user: User;
  provincias: string[] = ['Madrid'];
  countries: string[] = [];
  disableProvincias: boolean = true;
  result: any = {};
  responded: boolean = false;
  model: any;

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.countries
        : this.countries.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

  constructor(public service: RequestCountriesService) { }

  ngOnInit() {
    this.user = new User('', '', '');
    this.service.getRequest().subscribe(
      data => this.processResult(data),
      error => this.processError(error),
      () => this.processFinal()
    );
  }

  processResult(data: any) {
    console.log(data);
    this.result = data;
    this.countries = [];
    for (const country of this.result) {
      this.countries.push(country.name);
    }
    this.responded = true;
  }

  processError(error: any) {
    console.error(error);
  }

  processFinal() {}
  
  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
    // user.firstName = form.firstName
    // ...
  }

  selected (selected) {
    console.log(selected);
    if (selected === this.ccaa[0]) {
      this.provincias = ['Madrid'];
      this.disableProvincias = true;
    } else if (selected === this.ccaa[1]) {
      this.disableProvincias = false;
      this.provincias = ['Guadalajara', 'Toledo', 'Cuenca', 'Ciudad Real', 'Albacete'];
    }
  }

}
