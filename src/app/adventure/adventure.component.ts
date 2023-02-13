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
  posts: any
  shiny: boolean = false
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
    name: "",
    attack: 0,
    defense: 0,
    health: 0,
    skill: "",
    class: "",
    bonusAttack: 0,
    bonusDefense: 0,
    bonusHealth: 0,
    inventory: [],
    Quest: ""
  };
  decision: boolean = true;
  exploration: boolean = false;
  explorationChoice: boolean = false;
  wait: boolean = true;
  isWaiting: boolean = true

  waitingVariable: string = "The Olwarsterin stays still for the moment. It's tentacles be a wagging as it looks around for something.. anything at all to see. After finding nothing it submerrges it's inky body baxk into the depths of the ocean."
  v1: string = "You spot something on the ground.";
  v0: string = "Pick it Up";
  v2: string = "Leave it"
  item: string = "You find a piece of Olwarstein oil on your hand. Its luke warm and quite nasty. But you should be able to sell it for a pretty bit of coinage. You Pocket it"
  constructor(private httpService: ServiceService, private route: ActivatedRoute) {}
  name: string = String(this.route.snapshot.paramMap.get('name'));

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
    console.log(this.player);
  }

  decisionMade(value: boolean) {
      if (value) {
        this.exploration = false
      } 
      else {
          this.exploration = true;
      }
      this.decision = false;
  }

  explore(value: number) {
    if (value == 1) {
      this.wait = true;
      this.isWaiting = true;
    } else if (value == 2) {
      this.wait = true;
      this.isWaiting = false;
    } else {
      this.wait = false
    }
    this.explorationChoice = true;
  }

    escape() {

    }

    automove() {
      this.decision = false;
      this.exploration = true;
      this.explorationChoice = true;
      this.wait = true;
      this.isWaiting = true;
    }

    newItem: Inventory  = {
      name: 'Olwarstein Horn.',
      description: 'A disgustingly fleshy piece of chitinous mass. Useful for crafting magical weaponey.',
      magical: true,
      quantity: 100
  };
  

    acquireTreasure(value: Inventory) {
      this.player.inventory.push(value);
      console.log(this.player.inventory)
    }
}