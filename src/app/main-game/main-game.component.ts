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
  cityOption: string = ""

  locationData: any = {
    aInfo: "",
    aName: "",
    lDescription: "",
    lName: "",
    nextLocation: "",
    previousLocation: "",
    message: "",
    action: "",
    npc: [
      {
        npcInfo: "Argo",
        npcName: "Lorem Ipsum",
        npcType: "QuestGiver",
      },
      {
        npcInfo: "LArgo",
        npcName: "Lorem Ipsum Delta",
        npcType: "Merchant",
      },
    ]
  }
  
  player: CharacterSheet = {
    username: "",
    characterName: "",
    class: "",
    attack: 0,
    defense: 0,
    health: 0,
    skill: "",
    inventory: [],
    quest: ""
  }

  m1 : Messages = {
    first : "Shop",
    second : "Adventure",
    third :  "Chat with Locals" 
  }

  constructor(private httpService: ServiceService, private router: Router) { }
  ngOnInit() {
    this.getPlayerData()
    this.getLocation();
  }

  async getPlayerData() {
    try {
      const storedObjectString : any = sessionStorage.getItem("LoginCredentials");
      const parsedObject: FetchPlayerPayload = JSON.parse(storedObjectString);
      const response = await firstValueFrom(this.httpService.getPlayer(parsedObject))
      console.log(response);
      Object.assign(this.player, response)
      console.log(this.player);
    } catch (error) {
      console.log(error);
    }
   
  }

  async getLocation() {
    try {
      const Data : any = await firstValueFrom(this.httpService.getLocation('kap'))
      Object.assign(this.locationData, Data[0])
      console.log(this.locationData);
    } catch (error) {
      console.log(error);
    }
  }

  navigateTheSettlement(value: boolean) {
    if (value == true) {
      this.cityOption = 'merchant'
    }
    else {
      this.cityOption = 'socializing'
    }
  }

  reverse() {
    this.cityOption = ""
  }

  onRouting() {
    this.router.navigateByUrl(`/adventure/${this.locationData.nextLocation}`);
  }

  ngOnDestroy() {
    sessionStorage.setItem('player', JSON.stringify(this.player));
  }
}

      // for (let i = 0; i  < this.receive.inventory.length; i++) {
        //     this.player.inventory[i] = {
        //       name: this.receive.inventory[i].name,
        //       description: this.receive.inventory[i].description,
        //       magical: this.receive.inventory[i].magical,
        //       quantity: this.receive.inventory[i].quantity
        //     }
        // }
        // this.player.skill = this.receive.skill;
