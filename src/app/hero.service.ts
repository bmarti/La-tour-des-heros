import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.ajout('HeroService: lien établi avec la liste des héros');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.ajout(`HeroService: lien établi pour le héro id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
