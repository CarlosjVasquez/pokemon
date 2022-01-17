import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPokemon } from '../../models/ipokemon';

@Component({
  selector: 'pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.sass'],
})
export class PokemonFormComponent implements OnInit {
  @Input() title: string = '';
  @Input() pokemon_data: IPokemon = new IPokemon();
  @Output() save_data: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  validateUrl: boolean | null = null;

  constructor() {}

  ngOnInit(): void {}

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
