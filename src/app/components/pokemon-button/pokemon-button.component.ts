import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pokemon-button',
  templateUrl: './pokemon-button.component.html',
  styleUrls: ['./pokemon-button.component.sass'],
})
export class PokemonButtonComponent {
  @Input() text: string;
  @Input() icon: string | null;
  @Input() disabled: boolean;
  @Output() handleClick: EventEmitter<any>;

  constructor(){
    this.text = 'Click'
    this.icon = null
    this.disabled = false
    this.handleClick = new EventEmitter()
  }
}
