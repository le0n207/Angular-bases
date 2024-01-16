import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from '../../interfaces/character.interface';
import { DbzService } from "../../services/dbz.service";

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  constructor(public dbzService:DbzService){

  }

  @Output()
  //public onDeleteIdEmit: EventEmitter<number> = new EventEmitter();
  public onDeleteIdEmit: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  onDeleteId(id ?:string){
    if( !id ) return;
    this.onDeleteIdEmit.emit(id);

  }

  /*onDeleteCharacter(index:number){
    console.log(index);
    this.onDeleteIdEmit.emit(index);
  }*/
}
