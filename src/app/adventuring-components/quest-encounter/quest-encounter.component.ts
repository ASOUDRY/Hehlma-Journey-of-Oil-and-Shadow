import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  constructor(private httpService: ServiceService, private router: Router,  private route: ActivatedRoute) { }

   @Output() navigationEmitter = new EventEmitter<number>();
  
  navigateOutofQuest (value: number) {
    console.log("quest")
    this.navigationEmitter.emit(value);
  }

  @Input()  encounter: QuestData = {
    questButton1: "",
    questButton2: "",
    questdialogue1: "",
    questdialogue2: "",
    questdialogue3: ""
  };

  @Input()  fightData: Fight = {
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

  @Input() combat : any = {
    hiddenTactic: false,
    attack_option : "You bravely attack with your blade.",
    attackDescription: "Your blade strikes the zombie, slicing it's flesh, oily mass spilling frtom its freshly made wound.",
    dodge_action: "",
    dodge_option : "There is no where to hide. You must stand and fight",
    rewardType: "quest"
    }

    @Input() bootyObject: any = {
      string1: "With the zombie dead, you are able to look around the area once more You find something a little odd in the ground. Reaching into the water you pull out a half eaten mosst looking hand. Around its wrists you find a bracelet with a locket. Flicking open the locket You see the man who gave you the quest. You pocket the locket. Looks like it was all that was left of the girl.",
      string2: "Take locket with you",
      string3: "You take the locket woth you as proof you found her body. Hopefully it wll give the old man some sense of closure.",
      string4: "Head on Back.",
      item: {
        name: 'Girls bloody locket.',
        description: 'A bloody locket of the gross variety.',
        magical: false,
        quantity: 1
    },
  };


  questButton1: string = "";
  questButton2: string =  "";
  questButton3: string = "";
  questButton4: string =  "";
  questDialogue: string = ""
  placeholder: string = "abandon the search";

  prechoice: boolean = true;
  choice: string = "";
  
  ngOnInit() {
    this.questButton1 = this.encounter.questButton1;
    this.questButton2 = this.encounter.questButton2;
    this.questButton3 = "Continue on.";
    this.questButton4 = "Look elsewhere.";
    this.questDialogue = this.encounter.questdialogue1;
    console.log(this.encounter);
    console.log(this.bootyObject);
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
      this.questDialogue = this.encounter.questdialogue3;
    }
  }

  back() {
    this.prechoice = true;
    console.log(this.questDialogue);
    console.log(this.encounter.questdialogue3);
    this.questDialogue = this.encounter.questdialogue3;
    this.questButton1 = "Try exploring the blood trail again?"
  }
}