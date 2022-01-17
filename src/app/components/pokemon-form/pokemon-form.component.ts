import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPokemon } from '../../models/ipokemon';

@Component({
  selector: 'pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.sass'],
})
export class PokemonFormComponent {
  @Input() title: string;
  @Input() pokemon_data: IPokemon;
  @Output() save_data: EventEmitter<any>;
  @Output() cancel: EventEmitter<any>;
  validateUrl: boolean | null;

  constructor() {
    this.title = '';
    this.pokemon_data = new IPokemon();
    this.save_data = new EventEmitter();
    this.cancel = new EventEmitter();
    this.validateUrl = null;
  }

  validateInput(event: any, type: string) {
    let urlregex = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);

    switch (type) {
      case 'letter':
        return (
          (event.charCode >= 65 && event.charCode <= 90) ||
          (event.charCode >= 97 && event.charCode <= 122)
        );
      case 'url':
        if (urlregex.test(event.target.value)) {
          this.validateUrl = true;
        } else {
          this.validateUrl = false;
        }
        return event;
    }
  }
}
