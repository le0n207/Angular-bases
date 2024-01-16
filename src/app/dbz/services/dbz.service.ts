import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public character: Character[] = [{
    name: 'Kriling',
    power: 1000
  },{
    name: 'Goku',
    power: 9500
  },{
    name: 'Vegeta',
    power: 7500
  }];

  onNewCharacter( character:Character){
    console.log({character});
    this.character.push(character);
  }

  onDeleteCharacter(id: number){
    this.character.splice(id, 1);
  }

}
