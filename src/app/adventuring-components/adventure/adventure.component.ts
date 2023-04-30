import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private httpService: ServiceService, private route: ActivatedRoute, private router: Router) {}

  navigateToNewLocation(value: number) {
    console.log("reached the Apex")
    console.log(value);

    if (value == 1) {
      this.option1 = false;
    }
    else if (value == 0) {
      this.router.navigateByUrl(`/retreatingTo/Kap`);
    }
  }

    combat : any = {
    hiddenTactic: true,
    attack_option : "Boldly attack with your weapon",
    attackDescription: "You swing your sword with great force slicing the beast. Cutting its tentacle. Oil spills from its body just like that, plastering you all black with the goop.",
    dodge_action: "You dodge behind some flotsam or other material",
    dodge_option : "Duck behind some flotsam to wait and hide and",
    rewardType: "combat"
    }


  anyData: any
  counter: number = 0

  hasQuest: boolean = true;
  decision: boolean = true;
  option1: boolean = true;

  adventureOption: string = "";
  fightOption0 : string = "Wait and see what to do"
  fightOption1 : string = "Attempt to sneak past the beast"
  fightOption2 : string = "Fight"
  name: string = "";

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const key = params.get('name');
      this.name =   String (key);
    })
    this.getDataFromApi();
    this.getStorageData()
  }


  bootyObject: any = {
  string1: "You spot something on the ground",
  string2: "Pick it Up",
  string3: "Leave it",
  string4: "You find a piece of Olwarstein oil on your hand. Its luke warm and quite nasty. But you should be able to sell it for a pretty bit of coinage. You Pocket it",
  item: {
    name: 'Olwarstein Horn.',
    description: 'A disgustingly fleshy piece of chitinous mass. Useful for crafting magical weaponey.',
    magical: true,
    quantity: 100
},
};

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

  questFightData: Fight ={
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

  async getDataFromApi() {
    this.anyData = await firstValueFrom(this.httpService.getAdventure(this.name));    
    this.anyData = this.httpService.packageParser(this.anyData, 0);

    console.log(this.anyData);
    Object.assign(this.adventureData, this.anyData[0]);
    Object.assign(this.fightData, this.anyData[1]);
    Object.assign(this.questData, this.anyData[2]);
    Object.assign(this.questFightData, this.anyData[3]);
    Object.assign(this.stealthData, this.anyData[4]);
    console.log(this.fightData);
    console.log(this.questFightData);
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