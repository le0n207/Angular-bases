import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Output()
  public onDeleteIdEmit: EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  onDeleteId(){

  }

  onDeleteCharacter(index:number){
    console.log(index);
    this.onDeleteIdEmit.emit(index);

  }
}
