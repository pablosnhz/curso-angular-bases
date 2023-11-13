import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public Character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void{

    console.log(this.Character)
    if ( this.Character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.Character);

    this.Character = { name: '', power: 0}
  }
}
