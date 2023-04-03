import { Component, Input, SimpleChanges } from '@angular/core';
import { CombatDetails } from '../../interfaces/combat-details';
import { ServiceService } from '../../services/service.service';
import { CharacterSheet } from '../../interfaces/character-sheet';
import { AdventurePackage } from '../../interfaces/adventure-package';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent {

  constructor(private storageService: ServiceService) {};

  combat_options : CombatDetails = {
    character_attack: "You swing your sword with great force slicing the beast. Cutting its tentacle. Oil spills from its body just like that, plastering you all black with the goop.",
    monster_attack1: "The creature takes a swing at you ith its oil striking you",
    monster_attack2: "The creature takes a bite at you, it's fangs crushing your debree.",
    dodge_action: "You dodge behind some flotsam or other material",
    dodged_attacks: "The creature takes a bite at you, it's fangs crushing your debree",
    lose_choice: "It decides to retreat deciding your not worth it."
  };

@Input() monsterData: AdventurePackage = {
    adventure : "",
    afterCombat : "",
    attack : 0,
    creatureclass : "",
    defense : 0,
    hitpoints : 0,
    inCombat :  "",
    lDescription : "",
    lName :  "",
    monsterName   : "",
    next : "",
    onArrival: "",
    uniqueability: ""
}

player: CharacterSheet = {
  username: "",
  characterName: "",
  class: "",
  attack: 0,
  defense: 0,
  health: 0,
  skill: "",
  inventory: [],
  quest: ""
};
number: number = 0;
decision: boolean = true;
attack: boolean = false;
combat_Is_Ongoing : boolean = true;
precombat_description : string = "It's time to fight the big beasty Lets go. You approach the creature with your weapon in hand";
environmental_description: string = "The surrounding area is dirty. Gross washy water. Perfect for getting nice and defensive"
attack_option : string = "Boldly attack with your weapon";
dodge_option : string = "Duck behind some flotsam to wait and hide and";
your_attack: string = this.combat_options.character_attack;
monster_attack : string = this.combat_options.monster_attack1;
dodge_action: string = this.combat_options.dodge_action;
dodged_attack: string = this.combat_options.dodged_attacks;


hiddenTactic: boolean = true;

damage_dealt : number = 0
damage_taken: number = 0;
damaged_dialogue: string = "";

isdead: boolean = false;


ngOnInit() {
  const storedObjectString = sessionStorage.getItem("player");
  if (storedObjectString) {
    this.player = JSON.parse(storedObjectString);
  }
  console.log(this.player);
}
checkHealthBar() {
  console.log("I was called");
  console.log(this.monsterData.hitpoints);
  if (this.monsterData.hitpoints == 0) {
    console.log("its a zwero");
    this.combat_Is_Ongoing = false;
  }
}

attackDecider() {
  this.number = Math.floor((Math.random() * (9) + 1));
  if (this.number % 2 == 0) {
    this.monster_attack = this.combat_options.monster_attack1;
  }
  else {
    this.monster_attack = this.combat_options.monster_attack2;
  }
}

damageDeterminer(key: string) {
  if (key == "You") {
    let damage: number = this.player.attack - this.monsterData.defense
    this.damage_dealt += damage;
  }
  else if (key == "Enemy"){
    let value: number = this.monsterData.attack - this.player.defense
    this.damage_taken += value;
    this.damaged_dialogue = `You take ${value} damage and are knocked back.`;
    if(this.damage_taken >= this.player.health) {
      this.isdead = true;
    }
  }
  
}

  buttonNavigation (selection: string) {
    if (selection == "attack") {
      this.attack = true;
      this.decision = false;
      this.attackDecider();
      this.damageDeterminer("You");
      this.damageDeterminer("Enemy");
    }
    else if (selection == "dodge") {
      this.damageDeterminer("You");
      this.attack = false;
      this.decision = false;
    }
    this.checkHealthBar();
  }

  secretTactic () {
    this.monsterData.hitpoints = 0;
    console.log(this.monsterData.hitpoints);
    console.log("secret Tactic")
   this.checkHealthBar();
  }
}