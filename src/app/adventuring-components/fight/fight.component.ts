import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { CharacterSheet } from '../../interfaces/character-sheet';
import { Fight } from 'src/app/interfaces/Fight';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent {

  @Output() navigationEmitter = new EventEmitter<number>();

  navigateOutofFight(value: number) {
    console.log(value);
    console.log("firing from fight)");
    this.navigationEmitter.emit(value);
  }

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

  constructor(private storageService: ServiceService) {};

  @Input() monsterData: Fight = {
    monsterName: "",
    hitpoints: 0 ,
    attack: 0,
    defense: 0,
    monsterAttack1: "",
    monsterAttack2: "",
    dodgeAttack: "",
    monsterFlee: "",
    description1: "",
    description2: "",
    description3: "",
    uniqueAttackDescription: ""
  };

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

  @Input() combat : any = {
  hiddenTactic: false,
  attack_option : "",
  attackDescription: "",
  dodge_action: "",
  dodge_option : "",
  rewardType: ""
  }

  decision: boolean = true;
  decisionAction: string = "";
  options: string = "";

  monster_attack : string = this.monsterData.monsterAttack1;


  damage_dealt : number = 0
  damage_taken: number = 0;

  canYouDodge: boolean = true
 
  ngOnInit() {
    const storedObjectString = sessionStorage.getItem("player");
    if (storedObjectString) {
      this.player = JSON.parse(storedObjectString);
    }
    console.log(this.player);
    console.log(this.combat.dodge_action.length)
    

    if (this.combat.dodge_action.length > 0) {
      this.canYouDodge = false;
    }
  }

  checkHealthBar() {
    if (this.monsterData.hitpoints <= 0) {
    this.options = 'afterCombat';
    }
    else if (this.player.health <= 0) {
      this.options = 'dead';
    }
  }

  determineAttacks() {
    const number : number = Math.floor((Math.random() * (9) + 1));
    if (number % 2 == 0) {
      this.monster_attack = this.monsterData.monsterAttack1;
    }
    else {
      this.monster_attack = this.monsterData.monsterAttack2;
    }

  }

  calculateDamage(key: string) {
    if (key == "You attacked") {
      this.damage_dealt = this.player.attack - this.monsterData.defense
      this.monsterData.hitpoints -= this.damage_dealt;

      this.damage_taken = this.monsterData.attack - this.player.defense
      console.log(this.damage_taken)
      this.player.health -= this.damage_taken;
    }
    else if (key == "Enemy"){
      this.damage_taken = this.monsterData.attack - this.player.defense
      console.log(this.damage_taken)
      this.player.health -= this.damage_taken;
    }
    this.checkHealthBar();
  }

  combatNavigation (selection: string) {
      if (selection == "attack") {
        this.decisionAction = "attack";
        this.determineAttacks();
        this.calculateDamage("You attacked")
      }
      else if (selection == "dodge") {
        this.decisionAction = "dodge";
        this.calculateDamage("You dodged")
      }
      if (this.decision == true) {
        this.decision = false;
      }
  }

  secretTactic () {
      this.monsterData.hitpoints = 0;
      this.decisionAction = "secret"
      this.decision = false;
    this.checkHealthBar();
  }
}