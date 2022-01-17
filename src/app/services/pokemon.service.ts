import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPokemon } from '../models/ipokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  createPokemon(pokemon: IPokemon): Observable<any> {
    return this.http.post<any>(
      `${environment.api}/?idAuthor=${environment.id_author}`,
      pokemon
    );
  }

  getPokemons(): Observable<IPokemon[]> {
    return this.http.get<IPokemon[]>(
      `${environment.api}/?idAuthor=${environment.id_author}`
    );
  }

  getOnePokemon(id: number): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${environment.api}/${id}`);
  }

  putPokemon(pokemon: IPokemon): Observable<IPokemon> {
    return this.http.put<IPokemon>(`${environment.api}/${pokemon.id}`, pokemon);
  }

  deletePokemon(id: number | undefined): Observable<IPokemon> {
    return this.http.delete<IPokemon>(`${environment.api}/${id}`);
  }
}
