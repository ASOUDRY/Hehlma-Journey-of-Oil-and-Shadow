import { Component } from '@angular/core';
import { Inventory } from '../interfaces/inventory';
import { CharacterSheet } from '../interfaces/character-sheet';

@Component({
  selector: 'app-adventure-booty',
  templateUrl: './adventure-booty.component.html',
  styleUrls: ['./adventure-booty.component.css']
})
export class AdventureBootyComponent {

    player: CharacterSheet = {
    username: "",
    characterName: "",
    attack: 0,
    defense: 0,
    health: 0,
    skill: "",
    class: "",
    // bonusAttack: 0,
    // bonusDefense: 0,
    // bonusHealth: 0,
    inventory: [],
    quest: ""
  };
  lookForSpoils: boolean = true;

  lose_choice: string = "It decides to retreat deciding your not worth it.";
lose_search_dialogue: string = "Scavenge for materials"

  waitingVariable: string = "The Olwarsterin stays still for the moment. It's tentacles be a wagging as it looks around for something.. anything at all to see. After finding nothing it submerrges it's inky body baxk into the depths of the ocean."

   v1: string = "You spot something on the ground.";
  v0: string = "Pick it Up";
  v2: string = "Leave it"
    item: string = "You find a piece of Olwarstein oil on your hand. Its luke warm and quite nasty. But you should be able to sell it for a pretty bit of coinage. You Pocket it"
      shiny: boolean = false

         acquireTreasure(value: Inventory) {
      this.player.inventory.push(value);
      console.log(this.player.inventory)
    }

    newItem: Inventory  = {
    name: 'Olwarstein Horn.',
    description: 'A disgustingly fleshy piece of chitinous mass. Useful for crafting magical weaponey.',
    magical: true,
    quantity: 100
};
}
