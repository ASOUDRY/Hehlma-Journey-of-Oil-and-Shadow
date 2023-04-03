import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdventurePackage } from '../interfaces/adventure-package';
import { CharacterSheet } from '../interfaces/character-sheet';
import { ServiceService } from '../services/service.service';
import { Inventory } from "../interfaces/inventory"

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent {

  constructor(private httpService: ServiceService, private route: ActivatedRoute) {}

  adventureOption: string = "";
  counter: number = 0
  name: string = String(this.route.snapshot.paramMap.get('name'));
  hasQuest: boolean = false;
  posts: any
  decision: boolean = true;
  option1: boolean = true;

decisionOption0 : string = "Would you like to pursue your quest?"
decisionOption1 : string = "I'd like to explore the water"
decisionOption2 : string = "I'd like to walk along the port."

  data : AdventurePackage = {
    adventure : "",
    afterCombat : "",
    attack : 0,
    creatureclass : "",
    defense : 0,
    hitpoints : 0,
    inCombat :  "",
    lDescription : "",
    lName :  "",
    monsterName   : "",
    next : "",
    onArrival: "",
    uniqueability: ""
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
    this.httpService.getAdventure(this.name).subscribe(
      (response) => { this.posts = response; 
         console.log(response);
         this.data = this.posts
      },
      (error) => { console.log(error); }); 
      this.getStorageData()
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

  toggleOptions() {
    if (this.counter == 4) {
      this.counter = -1
    }
    this.counter++;
    switch(this.counter) {
      case 0:
       
        break;
      case 1:
        this.adventureOption = 'combat';
        break;
      case 2:
        this.adventureOption = 'stealth';
        break;
      case 3:
        this.adventureOption = 'wait';
        break;
      case 4:
        this.adventureOption = 'options';
        break;
    }
  }
    escape(value: string) {
      if (value == "prior_decision") {
        this.decision = true;
      }
      this.adventureOption = '';
    }
}