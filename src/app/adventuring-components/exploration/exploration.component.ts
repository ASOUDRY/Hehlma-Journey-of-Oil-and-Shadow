import { Component, Input } from '@angular/core';
import { AdventurePackage } from 'src/app/interfaces/adventure-package';

@Component({
  selector: 'app-exploration',
  templateUrl: './exploration.component.html',
  styleUrls: ['./exploration.component.css']
})
export class ExplorationComponent {


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

  exploration: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  exploration2: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  exploration3: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

}
