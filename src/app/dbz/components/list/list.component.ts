import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];
  @Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter();
  public onDeleteCharacter(index: number): void {
    // TODO: Emitir el ID del personaje
    this.onDeleteId.emit(index);
  }
}
