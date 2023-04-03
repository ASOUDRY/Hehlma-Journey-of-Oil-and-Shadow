import { Component, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CharacterSheet } from '../interfaces/character-sheet';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.css']
})
export class QuestsComponent {
  posts: any = undefined;
  player: CharacterSheet = {
    username: "",
    characterName: "",
    attack: 0,
    defense: 0,
    health: 0,
    skill: "",
    class: "",
    // bonusAttack: 0,
    // bonusDefense: 0,
    // bonusHealth: 0,
    inventory: [],
    quest: ""
  };
  questId: string = "";
  origin: string = "";
  response: string = ""
  giver: string = 'Dachs Kraus'
  deliberating: boolean = true;

  constructor(private httpService: ServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getApiData()
    this.questId = this.route.snapshot.params['lName'];
    this.origin = this.route.snapshot.params['origin'];
    if (this.origin == "The Drunken Squid") {
    this.giver = "Dachs Kraus"
    }
    // this.getApiData();
    this.getStorageData()
  }

  leave: string = "Nothing";
  dialogue : string = "Howdy do travelor my name is Lexie. You looking alright to me. What can I do you for?";

  @Output() backToOption = new EventEmitter<boolean>();

  onLeave() {
    this.backToOption.emit(true)
  }

  getStorageData() {
  let playerData: any = sessionStorage.getItem('player');
  this.player = JSON.parse(playerData);
  console.log(this.player);
  }

  onAccept(value: boolean) {
    if (value) {
      this.response = "Good Luck"
      console.log(this.posts.identifer);
      this.player.quest = this.posts.identifer
      this.httpService.updatePlayer(this.posts.identifer)
    }
    else {
      this.response = "Sod off Then"
    }
    this.deliberating = !this.deliberating
  }

  onRouting(value: string) {
    this.router.navigateByUrl(`/adventure/${value}`);
  }

  async getApiData() {
    try {
      const response = await firstValueFrom(this.httpService.getQuest(this.giver, 'Kap'))
      this.posts = response
      console.log(this.posts)
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy() {
    sessionStorage.setItem('player', JSON.stringify(this.player));
  }
}