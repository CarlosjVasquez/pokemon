import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pokemon-button',
  templateUrl: './pokemon-button.component.html',
  styleUrls: ['./pokemon-button.component.sass'],
})
export class PokemonButtonComponent {
  @Input() text: string = 'Click';
  @Input() icon: string | null = null;
  @Input() disabled: boolean = false;
  @Output() handleClick: EventEmitter<any> = new EventEmitter();
}
