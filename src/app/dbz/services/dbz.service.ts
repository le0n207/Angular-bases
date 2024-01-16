import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Kriling',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter( character:Character){

    /* Esta forma es basica
    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }*/
    /* Esta forma es esparcir todo el contenido de character
     en al nuevo id*/
    const newCharacter: Character = {
      id: uuid(), ...character
    }
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(id: number){
    this.characters.splice(id, 1);
  }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id)
  }

}
