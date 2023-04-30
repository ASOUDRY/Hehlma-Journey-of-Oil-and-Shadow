import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Inventory } from '../../interfaces/inventory';
import { CharacterSheet } from '../../interfaces/character-sheet';
import { NumberInput } from '@angular/cdk/coercion';

@Component({
  selector: 'app-adventure-booty',
  templateUrl: './adventure-booty.component.html',
  styleUrls: ['./adventure-booty.component.css']
})
export class AdventureBootyComponent {

  ngOnInit() {
    console.log(this.bootyObject);
  }

  @Output() navigationEmitter = new EventEmitter<number>();

  navigateOutofBooty(value: number) {
    this.navigationEmitter.emit(value);
  }
    shiny: boolean = false
    player: CharacterSheet = {
    username: "",
    characterName: "",
    attack: 0,
    defense: 0,
    health: 0,
    skill: "",
    class: "",
    inventory: [],
    quest: ""
  };

@Input() whichBooty: string = "other";

@Input() bootyObject: any = {
    string1: "",
    string2: "",
    string3: "",
    string4: "",
    item: {
      name: '',
      description: '',
      magical: true,
      quantity: 100
  },
};

acquireTreasure(value: Inventory) {
    this.shiny = true;
    this.player.inventory.push(value);
  }
}