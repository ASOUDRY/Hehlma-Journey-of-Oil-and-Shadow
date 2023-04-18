import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdventurePackage } from '../../interfaces/adventure-package';
import { CharacterSheet } from '../../interfaces/character-sheet';
import { ServiceService } from '../../services/service.service';
import { Inventory } from "../../interfaces/inventory"
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent {

  constructor(private httpService: ServiceService, private route: ActivatedRoute) {}

  adventureOption: string = "";
  counter: number = 0
  name: string = "";
  hasQuest: boolean = true;
  posts: any
  decision: boolean = true;
  option1: boolean = true;

fightOption0 : string = "Wait and see what to do"
fightOption1 : string = "Attempt to sneak past the beast"
fightOption2 : string = "Fight"

  data: AdventurePackage = {
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
    console.log(this.name);
    this.posts = await firstValueFrom(this.httpService.getAdventure(this.name));
    this.data = this.posts;
    this.posts = await firstValueFrom(this.httpService.getAdventure(this.name));
    this.data = this.posts;
    // console.log(response);
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