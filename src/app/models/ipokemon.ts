import { environment } from '../../environments/environment';
export class IPokemon {
  id?: number;
  name: string | null;
  image: string | null;
  type: 'water' | 'fire' | 'normal' | 'bug' | 'poison';
  hp: number;
  attack: number;
  defense: number;
  idAuthor: number;
  created_at?: string;
  updated_at?: string;
  constructor() {
    this.name = null;
    this.image = null;
    this.type = 'normal';
    this.hp = 1;
    this.attack = 1;
    this.defense = 1;
    this.idAuthor = environment.id_author;
  }
}
