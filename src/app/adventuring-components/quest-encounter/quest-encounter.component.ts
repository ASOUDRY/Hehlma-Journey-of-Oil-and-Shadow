import { Component, Input } from '@angular/core';
import { AdventurePackage } from 'src/app/interfaces/adventure-package';

@Component({
  selector: 'app-quest-encounter',
  templateUrl: './quest-encounter.component.html',
  styleUrls: ['./quest-encounter.component.css']
})
export class QuestEncounterComponent {
  questButton1: string = "";
  questButton2: string =  "";
  questDialogue: string = ""
  placeholder: string = "abandon the search";

  notBackTracking: boolean = true;
 
  prechoice: boolean = true;
  choice: string = "";

  @Input() data: AdventurePackage = {
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
    this.questDialogue = this.data.questdialogue1
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
