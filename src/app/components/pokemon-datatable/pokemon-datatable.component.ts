import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPokemon } from '../../models/ipokemon';

@Component({
  selector: 'pokemon-datatable',
  templateUrl: './pokemon-datatable.component.html',
  styleUrls: ['./pokemon-datatable.component.sass'],
})
export class PokemonDatatableComponent implements OnInit {
  @Input() data: IPokemon[] = [];
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
