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
});
