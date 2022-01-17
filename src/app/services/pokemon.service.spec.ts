import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';
import { IPokemon } from '../models/ipokemon';
import { environment } from 'src/environments/environment';

describe('PokemonService', () => {
  let service: PokemonService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PokemonService);
    injector = getTestBed();
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Servicio creado', () => {
    expect(service).toBeTruthy();
  });

  it('Crear pokemon', () => {
    const mockPokemon: IPokemon = {
      id: 517,
      name: 'Pyroars',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      type: 'bug',
      hp: 12,
      attack: 74,
      defense: 33,
      idAuthor: 3,
      created_at: '2022-01-16T21:13:53.709Z',
      updated_at: '2022-01-16T21:13:53.709Z',
    };
    const pokemonData: IPokemon = {
      name: 'Pyroars',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      type: 'bug',
      hp: 12,
      attack: 74,
      defense: 33,
      idAuthor: 3,
    };

    service.createPokemon(pokemonData).subscribe((pokemon: IPokemon) => {
      expect(pokemon.name).toBe('Pyroars');
      expect(pokemon.idAuthor).toEqual(3);
    });

    const req = httpMock.expectOne(
      `${environment.api}/?idAuthor=${environment.id_author}`
    );
    expect(req.request.method).toBe('POST');
    req.flush(mockPokemon);
  });

  it('Se obtienen los pokemon', () => {
    const mockPokemon: IPokemon[] = [
      {
        id: 446,
        name: 'Pyroars',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        type: 'bug',
        hp: 12,
        attack: 74,
        defense: 33,
        idAuthor: 3,
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
        idAuthor: 3,
        created_at: '2021-11-18T16:09:38.416Z',
        updated_at: '2021-11-30T20:52:21.266Z',
      },
    ];

    service.getPokemons().subscribe((pokemons: IPokemon[]) => {
      expect(pokemons.length).toBeGreaterThan(1);
    });

    const req = httpMock.expectOne(`${environment.api}/?idAuthor=3`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPokemon);
  });

  it('Se obtiene un pokemon', () => {
    const mockPokemon: IPokemon = {
      id: 446,
      name: 'Pyroars',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      type: 'bug',
      hp: 12,
      attack: 74,
      defense: 33,
      idAuthor: 3,
      created_at: '2022-01-03T22:16:10.116Z',
      updated_at: '2022-01-03T22:16:10.116Z',
    };

    const id: number = 446;

    service.getOnePokemon(id).subscribe((pokemon: IPokemon) => {
      expect(pokemon.name).toBe('Pyroars');
    });

    const req = httpMock.expectOne(`${environment.api}/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPokemon);
  });

  it('Actualizar pokemon', () => {
    const mockPokemon: IPokemon = {
      id: 517,
      name: 'Pyroar',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      type: 'bug',
      hp: 12,
      attack: 74,
      defense: 33,
      idAuthor: 3,
      created_at: '2022-01-16T21:13:53.709Z',
      updated_at: '2022-01-16T21:13:53.709Z',
    };
    const pokemonData: IPokemon = {
      id: 517,
      name: 'Pyroar',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      type: 'bug',
      hp: 12,
      attack: 74,
      defense: 33,
      idAuthor: 3,
      created_at: '2022-01-16T21:13:53.709Z',
      updated_at: '2022-01-16T21:13:53.709Z',
    };

    service.putPokemon(pokemonData).subscribe((pokemon: IPokemon) => {
      expect(pokemon.name).toBe('Pyroar');
    });

    const req = httpMock.expectOne(`${environment.api}/${pokemonData.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockPokemon);
  });

  it('Eliminar pokemon', () => {
    const mockPokemon: IPokemon = {
      id: 517,
      name: 'Pyroars',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      type: 'bug',
      hp: 12,
      attack: 74,
      defense: 33,
      idAuthor: 3,
      created_at: '2022-01-16T21:13:53.709Z',
      updated_at: '2022-01-16T21:13:53.709Z',
    };
    const id = 517;

    service.deletePokemon(id).subscribe((pokemon: IPokemon) => {
      expect(pokemon.name).toBe('Pyroars');
    });

    const req = httpMock.expectOne(`${environment.api}/${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockPokemon);
  });
});
