import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

type PokeapiResponse = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

@Component({
  selector: 'app-pokelist',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './pokelist.component.html',
  styleUrl: './pokelist.component.css'
})
export class PokelistComponent {
  httpClient = inject(HttpClient);
  pokelist$!: Observable<PokeapiResponse>;
  page = 0;

  constructor(/* private httpClient: HttpClient */) {
    this.load();
  }

  load() {
    this.pokelist$ = this.httpClient
      .get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon?offset=${this.page}`);
  }

  onNext() {
    this.page += 20;
    this.load();
  }
}
