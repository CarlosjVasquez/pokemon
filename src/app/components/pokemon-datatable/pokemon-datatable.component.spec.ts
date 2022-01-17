import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDatatableComponent } from './pokemon-datatable.component';

describe('PokemonDatatableComponent', () => {
  let component: PokemonDatatableComponent;
  let fixture: ComponentFixture<PokemonDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonDatatableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creación de Datatable', () => {
    expect(component).toBeTruthy();
  });

  it('Muestra de Datos o información de data vacía', () => {
    component.data = [
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
    ];

    fixture.detectChanges();

    const con_datos = fixture.debugElement.nativeElement.querySelector('td');
    expect(con_datos.textContent).toContain('Pyroars');

    component.data = [];

    fixture.detectChanges();
    const sin_datos = fixture.debugElement.nativeElement.querySelector('td');
    expect(sin_datos.textContent).toContain('No hay data');
  });
});
