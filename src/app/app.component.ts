import { Component, OnInit } from '@angular/core';
import { IPokemon } from './models/ipokemon';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  search_text: string = '';
  data: IPokemon[] = [];
  data_search: IPokemon[] = [];
  add_pokemon: boolean = false;
  update_pokemon: boolean = false;
  title_form: string = '';
  pokemon_data: IPokemon = new IPokemon();
  loading: boolean = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  async getPokemons() {
    this.loading = true;
    try {
      const pokemons = await this.pokemonService.getPokemons().toPromise();
      this.data = pokemons;
      this.data_search = pokemons;
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }

  searchPokemon() {
    let text_search = String(this.search_text).toLowerCase();

    this.data_search = this.data.filter(
      (pokemon) =>
        String(pokemon.name).toLowerCase().indexOf(text_search) !== -1
    );
  }

  newPokemon() {
    this.pokemon_data = new IPokemon();
    this.title_form = 'Nuevo Pokemon';
    this.add_pokemon = true;
  }

  cancelForm() {
    this.update_pokemon = false;
    this.add_pokemon = false;
  }

  updatePokemon(pokemon: IPokemon) {
    this.pokemon_data = pokemon;
    this.title_form = 'Actualizar Pokemon';
    this.update_pokemon = true;
  }

  async savePokemon(pokemon: IPokemon) {
    this.loading = true;
    if (this.add_pokemon) {
      try {
        await this.pokemonService.createPokemon(pokemon).toPromise();
        this.getPokemons();
        this.add_pokemon = false;
      } catch (error) {
        console.log(error);
      }
    } else if (this.update_pokemon) {
      try {
        await this.pokemonService.putPokemon(pokemon).toPromise();
        this.getPokemons();
        this.update_pokemon = false;
      } catch (error) {
        console.log(error);
      }
    }
    this.loading = false;
  }

  async deletePokemon(pokemon: IPokemon) {
    this.loading = true;
    try {
      await this.pokemonService.deletePokemon(pokemon.id).toPromise();
      this.getPokemons();
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }
}
