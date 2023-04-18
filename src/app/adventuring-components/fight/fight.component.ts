import { Component, Input, SimpleChanges } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { CharacterSheet } from '../../interfaces/character-sheet';
import { AdventurePackage } from '../../interfaces/adventure-package';
import { QuestEncounter } from 'src/app/interfaces/quest-encounter';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent {

  posts: any

  constructor(private storageService: ServiceService) {};

  @Input() monsterData: AdventurePackage = {
    questButton1: "",
    questButton2: "",
    adventureOption1: '',
    adventureOption2: '',
    attack: 0,
    bootyReward: '',
    defense: 0,
    dodgeAttack: '',
    enviormentDescription: '',
    exploration1: '',
    exploration2: '',
    exploration3: '',
    fightEnviormentDescription1: '',
    fightEnviormentDescription2: '',
    hitpoints: 0,
    locationDescription: '',
    locationName: '',
    monsterAttack1: '',
    monsterAttack2: '',
    monsterFlee: '',
    monsterName: '',
    nextLocation: '',
    questName: '',
    questdialogue1: '',
    questdialogue2: '',
    questdialogue3: '',
    stealth1: '',
    stealth2: '',
    uniqueAttackDescription: '',
  };

  encounter: QuestEncounter = {
    monsterName: '',
    hitpoints: 0,
    attack: 0,
    defense: 0,
    MonsterAttack1: '',
    MonsterAttack2: '',
    dodgeAttack: '',
    MonsterFlee: '',
    uniqueAction: '',
    questCombat1: '',
    questCombat2: '',
    questCombat3: '',
    questdialogue1: '',
    questdialogue2: '',
    questdialogue3: '',
    questButton1: '',
    questButton2: '',
    questName: '',
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

  action: string = "";
  combat_Is_Ongoing : boolean = true;


  InitialDescripter: string = "";
  dodge_action: string = "You dodge behind some flotsam or other material";
  attack_option : string = "Boldly attack with your weapon";
  dodge_option : string = "Duck behind some flotsam to wait and hide and";
  your_attack: string = "You swing your sword with great force slicing the beast. Cutting its tentacle. Oil spills from its body just like that, plastering you all black with the goop.";

  monster_attack : string = this.monsterData.monsterAttack1;
  dodged_attack: string = this.monsterData.dodgeAttack;

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
    this.getDataFromApi();
    console.log(this.player);
  }

  async getDataFromApi() {
    this.posts = await firstValueFrom(this.storageService.getAdventure('Stirring Sea'));
    this.encounter = this.posts;
    console.log(this.encounter);
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
      this.monster_attack = this.monsterData.monsterAttack1;
    }
    else {
      this.monster_attack = this.monsterData.monsterAttack2;
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
        this.action = "attack";
        this.decision = false;
        this.attackDecider();
        this.damageDeterminer("You");
        this.damageDeterminer("Enemy");
      }
      else if (selection == "dodge") {
        this.damageDeterminer("You");
        this.action = "dodge";
        this.decision = false;
      }
      this.checkHealthBar();
  }

  secretTactic () {
      this.monsterData.hitpoints = 0;
      console.log(this.monsterData.hitpoints);
      console.log("secret Tactic")
      this.action = "secret"
      this.decision = false;
    this.checkHealthBar();
  }
}