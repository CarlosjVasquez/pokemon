import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonButtonComponent } from './pokemon-button.component';

describe('PokemonButtonComponent', () => {
  let component: PokemonButtonComponent;
  let fixture: ComponentFixture<PokemonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creación de botón', () => {
    expect(component).toBeTruthy();
  });
});
