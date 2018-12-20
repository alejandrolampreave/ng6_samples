import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  public heroes: Array<Hero> = [new Hero('Batman', 'Dark knight'), new Hero('Spiderman', 'spidy')];

  constructor() { }

  addHero (myHero: Hero) {
    this.heroes.push(myHero);
  }

}
