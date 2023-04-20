import { Component, Input } from '@angular/core';
import { AdventurePackage } from 'src/app/interfaces/adventure-package';
import { QuestData } from 'src/app/interfaces/QuestData';
import { ServiceService } from 'src/app/services/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Fight } from 'src/app/interfaces/Fight';

@Component({
  selector: 'app-quest-encounter',
  templateUrl: './quest-encounter.component.html',
  styleUrls: ['./quest-encounter.component.css']
})
export class QuestEncounterComponent {
  posts: any;
  name: string = "";
  constructor(private httpService: ServiceService, private router: Router,  private route: ActivatedRoute) { }

  encounter: QuestData = {
    questButton1: "",
    questButton2: "",
    questdialogue1: "",
    questdialogue2: "",
    questdialogue3: ""
  };

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
  };


  questButton1: string = "";
  questButton2: string =  "";
  questDialogue: string = ""
  placeholder: string = "abandon the search";

  notBackTracking: boolean = true;
 
  prechoice: boolean = true;
  choice: string = "";

  @Input() data: any = {
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

  ngOnInit() {
    this.questButton1 = this.data.questButton1;
    this.questButton2 = this.data.questButton2;
    this.questDialogue = this.data.questdialogue1;

    this.route.paramMap.subscribe(params => {
      const key = params.get('name');
      this.name =   String (key);
      console.log(this.name);
      console.log(this.data);
    })

    this.getApiData();

  }

  async getApiData() {
    this.posts = await firstValueFrom(this.httpService.getQuestEncounter(this.name));
    this.encounter = this.posts;
    console.log(this.encounter);

    this.posts = this.httpService.packageParser(this.posts, 1);
  }

  choose(input: number) {
    if (input == 1) {  
      this.choice = "option1"
      this.questButton1 = "Continue on.";
      this.questButton2 = "Look elsewhere.";
    }
    else {
        const number = Math.floor((Math.random() * (9) + 1));
      if (number % 2 == 0) {
        this.choice = "option2"
      }
      else {
      this.choice = "combat"
      }
    }
    this.prechoice = false;
  }

  potentialCombat(input: number) {
    if (input == 1) {
      this.choice = "combat"
    } else if (input == 2) {
      this.prechoice = true;
      this.questDialogue = this.data.questdialogue3
    }
  }

  back() {
    this.prechoice = true;
  }

  doneQuest() {

  }

}
