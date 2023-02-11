import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.css']
})
export class QuestsComponent {
  posts: any = undefined;
  questId: string = "";
  origin: string = "";
  giver: string = ""

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getApiData()
    this.questId = this.route.snapshot.params['lName'];
    this.origin = this.route.snapshot.params['origin'];
    if (this.origin == "The Drunken Squid") {
      this.giver = "Tavern Goer"
    }
  }

leave: string = "Nothing";
dialogue : string = "Howdy do travelor my name is Lexie. You looking alright to me. What can I do you for?";

@Output() backToOption = new EventEmitter<boolean>();

onLeave() {
  this.backToOption.emit(true)
}

getApiData() {

}
}
