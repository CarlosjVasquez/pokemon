import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PokemonService } from './services/pokemon.service';

describe('AppComponent', () => {
  let app: AppComponent;
  let pokemonService: PokemonService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent],
      providers: [PokemonService],
    }).compileComponents();
    app = new AppComponent(pokemonService);
  });

  it('creacion de la aplicación', () => {
    expect(app).toBeTruthy();
  });

  it('filtrar por nombre', () => {
    app.data = [
      {
        id: 446,
        name: 'Pyroars',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        type: 'bug',
        hp: 12,
        attack: 74,
        defense: 33,
        idAuthor: 1,
        created_at: '2022-01-03T22:16:10.116Z',
        updated_at: '2022-01-03T22:16:10.116Z',
      },
      {
        id: 166,
        name: 'Sandallas',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png',
        type: 'bug',
        hp: 55,
        attack: 73,
        defense: 64,
        idAuthor: 2,
        created_at: '2021-11-18T16:09:38.416Z',
        updated_at: '2021-11-30T20:52:21.266Z',
      },
    ];

    app.search_text = 'pyr';
    app.searchPokemon();
    expect(app.data_search.length).toEqual(1);
    expect(app.data_search[0].name).toBe('Pyroars');

    app.search_text = 'asd';
    app.searchPokemon();
    expect(app.data_search.length).toEqual(0);
  });
});
