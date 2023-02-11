import { Component} from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Messages } from '../interfaces/messages';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { FetchPlayerPayload } from '../interfaces/fetch-player-payload';
import { CharacterSheet } from '../interfaces/character-sheet';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css']
})
export class MainGameComponent {
  posts : any;
  data : any
  name: any;
  tests: any;
  message = "";
  action: string = "";
  storedObject: any;
  receive: any;
  undecided = true;
  shopping = false;
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
    inventory: []
  }

  m1 : Messages = {
    first : "Shop",
    second : "Adventure",
    third :  "Chat with Locals" 
  }

  constructor(private httpService: ServiceService, private router: Router) { }
  ngOnInit() {
    const storedObjectString = sessionStorage.getItem("LoginCredentials");
    console.log(storedObjectString)
    if (storedObjectString) {
      this.storedObject = JSON.parse(storedObjectString);
    }
    console.log(this.storedObject);
    this.getDataFromApi()
  }

  async getDataFromApi() {
    try {
      const payload: FetchPlayerPayload = this.storedObject;
      const response = await firstValueFrom(this.httpService.getPlayer(this.storedObject))
      console.log(response);
      this.receive = response;
      this.player.name = this.receive.characterName;
      this.player.attack = this.receive.attack;
      this.player.defense = this.receive.defense;
      this.player.health = this.receive.hitpoints;
      this.player.class = this.receive.cClass;
      for (let i = 0; i  < this.receive.inventory.length; i++) {
          this.player.inventory[i] = {
            name: this.receive.inventory[i].name,
            description: this.receive.inventory[i].description,
            magical: this.receive.inventory[i].magical,
            quantity: this.receive.inventory[i].quantity
          }
      }
      this.player.skill = this.receive.skill;
      console.log(this.player)
    
    } catch (error) {
      console.log(error);
    }
    try {
      const response = await firstValueFrom(this.httpService.getLocation('Kap'))
      this.posts = response; 
      this.data = this.posts;
      console.log(this.posts);
    } catch (error) {
      console.log(error);
    }
  }

  onEditClick(value: string) {
    console.log(value);
    this.undecided = !this.undecided;
    if (value == this.m1.first) {
      this.message = `You find the ${this.posts[0].npcType} ${this.posts[0].npcName}.${this.posts[0].npcInfo}`;
      this.action = "What would you like to do?";
      console.log(value);
    }
    else if (value == this.m1.second) {
      this.message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    }
     else {
      this.message = `You wander over to the ${this.posts[0].aName} ${this.posts[0].npcName}.`;
      this.action = `${this.posts[0].aInfo}`;
    }
  }

  reverse() {
    this.undecided = !this.undecided;
  }

  onRouting() {
    this.router.navigateByUrl(`/adventure/${this.posts[0].next}`);
  }
}