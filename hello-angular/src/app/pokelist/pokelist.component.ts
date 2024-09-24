import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable, OnInit, signal } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

type PokeapiResponse = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

@Injectable({ providedIn: 'root' })
export class PokelistService {
  httpClient = inject(HttpClient);

  fetchPokelist(page: number): Promise<PokeapiResponse> {
    return firstValueFrom(this.fetchPokelistRxjs(page));
  }

  fetchPokelistRxjs(page: number): Observable<PokeapiResponse> {
    return this.httpClient.get<PokeapiResponse>(
        `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=10`
      );
  }
}

@Component({
  selector: 'app-pokelist',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './pokelist.component.html',
  styleUrl: './pokelist.component.css',
})
export class PokelistComponent implements OnInit {
  pokelistService = inject(PokelistService);

  pokelist = signal<PokeapiResponse | undefined>(undefined);
  errormsg = signal('');
  page = signal(0);
  isLoading = signal(false);

  async ngOnInit() {
    await this.refresh();
  }

  async onNext() {
    this.page.update((p) => p + 10);
    await this.refresh();
  }

  async refresh() {
    this.errormsg.set('');
    this.isLoading.set(true);
    try {
      const pokelist = await this.pokelistService.fetchPokelist(this.page());
      // const pokelist = await firstValueFrom(this.pokelistService.fetchPokelistRxjs(this.page()));
      this.pokelist.set(pokelist);
    } catch (err: any) {
      this.errormsg.set(err.toString());
    } finally {
      this.isLoading.set(false);
    }
  }
}
