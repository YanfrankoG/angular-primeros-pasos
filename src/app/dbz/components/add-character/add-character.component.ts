import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  public character: Character = {
    name: 'ABC',
    power: 0,
  };

  emitCharacter(): void {
    console.log(this.character);
  }
}
