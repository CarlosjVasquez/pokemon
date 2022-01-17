import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFormComponent } from './pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { PokemonButtonComponent } from '../pokemon-button/pokemon-button.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PokemonFormComponent', () => {
  let component: PokemonFormComponent;
  let fixture: ComponentFixture<PokemonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonFormComponent, PokemonButtonComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creacion de formulario', () => {
    expect(component).toBeTruthy();
  });

  it('Validación de input', () => {
    const name = fixture.debugElement.query(By.css('#name'));

    const event = {
      keyCode: 70,
      preventDefault: jasmine.createSpy('preventDefault'),
    };

    name.triggerEventHandler('keypress', event);

    expect(event.preventDefault).not.toHaveBeenCalled();

    const url = fixture.debugElement.query(By.css('#image'));

    url.triggerEventHandler('keypress', event);

    expect(event.preventDefault).not.toHaveBeenCalled();
  });
});
