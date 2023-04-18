import { Component, Input } from '@angular/core';
import { AdventurePackage } from 'src/app/interfaces/adventure-package';

@Component({
  selector: 'app-stealth',
  templateUrl: './stealth.component.html',
  styleUrls: ['./stealth.component.css']
})
export class StealthComponent {


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

  primary: string = "You attempt to sneak past the Owalarsterin, carefully creaping along all the debree. Eventually the creature submerges back into the oily water and you are home free."

  secondary: string = "Yosh"
}
