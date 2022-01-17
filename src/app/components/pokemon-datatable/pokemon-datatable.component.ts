import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPokemon } from '../../models/ipokemon';

@Component({
  selector: 'pokemon-datatable',
  templateUrl: './pokemon-datatable.component.html',
  styleUrls: ['./pokemon-datatable.component.sass'],
})
export class PokemonDatatableComponent {
  @Input() data: IPokemon[];
  @Output() edit: EventEmitter<any>;
  @Output() delete: EventEmitter<any>;

  constructor() {
    this.data = [];
    this.edit = new EventEmitter();
    this.delete = new EventEmitter();
  }
}
