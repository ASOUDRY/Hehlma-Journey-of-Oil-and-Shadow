import { Component, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.css']
})
export class QuestsComponent {
  posts: any = undefined;
  questId: string = "";
  origin: string = "";
  response: string = ""
  giver: string = 'Dachs Kraus'
  deliberating: boolean = true;

  constructor(private httpService: ServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getApiData()
    this.questId = this.route.snapshot.params['lName'];
    this.origin = this.route.snapshot.params['origin'];
    if (this.origin == "The Drunken Squid") {
    this.giver = "Dachs Kraus"
    }
    this.getApiData();
  }

  leave: string = "Nothing";
  dialogue : string = "Howdy do travelor my name is Lexie. You looking alright to me. What can I do you for?";

  @Output() backToOption = new EventEmitter<boolean>();

  onLeave() {
    this.backToOption.emit(true)
  }

  onAccept(value: boolean) {
    if (value) {
      this.response = "Good Luck"
    }
    else {
      this.response = "Sod off Then"
    }
    this.deliberating = !this.deliberating
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
}
