import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Satan',
    power: 10
  }];

  onNewCharacter( Character: Character ):void{

    const newCharacter = {  id: uuid(), ...Character };


    this.characters.push(Character);
  }

  // onDeleteCharacter(index: number) {
    // this.characters.splice(index, 1)
  deleteCharacterById ( id:string ) {
    this.characters = this.characters.filter( Character => Character.id !== id )
  }


}
