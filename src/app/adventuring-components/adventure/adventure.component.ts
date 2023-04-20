import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdventurePackage } from '../../interfaces/adventure-package';
import { CharacterSheet } from '../../interfaces/character-sheet';
import { ServiceService } from '../../services/service.service';
import { Inventory } from "../../interfaces/inventory"
import { firstValueFrom } from 'rxjs';
import { Fight } from 'src/app/interfaces/Fight';
import { QuestData } from 'src/app/interfaces/QuestData';
import { StealthData } from 'src/app/interfaces/StealthData';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent {

  fight: Fight = {
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
  }

  constructor(private httpService: ServiceService, private route: ActivatedRoute) {}

  adventureOption: string = "";
  counter: number = 0
  name: string = "";
  hasQuest: boolean = true;
  anyData: any
  decision: boolean = true;
  option1: boolean = true;

fightOption0 : string = "Wait and see what to do"
fightOption1 : string = "Attempt to sneak past the beast"
fightOption2 : string = "Fight"

  adventureData: AdventurePackage = {
    locationName: "",
    locationDescription: "",
    adventureOption1: "",
    adventureOption2: "",
    exploration1: "",
    exploration2: "",
    exploration3: "",
    enviormentalDescription: "",
    nextLocation: "",
    questName: ""
  }
  questData: QuestData = {
    questButton1: "",
    questButton2: "",
    questdialogue1: "",
    questdialogue2: "",
    questdialogue3: ""
  }
  fightData: Fight = {
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
  }
  stealthData: StealthData = {
    stealth1: "",
    stealth2: ""
  }

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

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const key = params.get('name');
      this.name =   String (key);
      console.log(this.name);
    })
    this.getDataFromApi();
    this.getStorageData()
  }

  async getDataFromApi() {
    this.anyData = await firstValueFrom(this.httpService.getAdventure(this.name));
    console.log(this.anyData);
    
    this.anyData = this.httpService.packageParser(this.anyData, 0);

    this.adventureData = this.anyData[0];
    
    this.fightData = this.anyData[1];

    this.questData = this.anyData[2];

    this.stealthData = this.anyData[4];
    console.log(this.anyData);

  }



  getStorageData() {
    let playerData: any = sessionStorage.getItem('player');
    this.player = JSON.parse(playerData);

    if (this.player.quest.length > 1) {
      this.hasQuest = true;
    }
  }

  decisionMade(value: number) {
    if (value == 0) {
      this.option1 = true;
      this.adventureOption = 'quest';
    }
    else if (value == 1) {
      this.option1 = true;
   //   this.adventureOption = 'options';
    } else {
      this.option1 = false;
    }
      this.decision = false;
  }

  option1Choices(value: number) {
    if (value == 1) {
      this.adventureOption = 'wait';
    }
    else if (value == 2) {
      this.adventureOption = 'stealth';
    } else {
      this.adventureOption = 'combat';
    }
  }
    escape(value: string) {
      if (value == "prior_decision") {
        this.decision = true;
      }
      this.adventureOption = '';
    }
}