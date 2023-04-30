import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  undecided: boolean = true;
  Drinking: boolean = false;

  @Input() data: any = {
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

  constructor(private httpService: ServiceService, private router: Router) { }


  ngOnInit() {
   
  }

  @Output() backToOption = new EventEmitter<void>();

    onLeave() {
    this.backToOption.emit()
  }

  drinking(value: boolean) {
    console.log(value)
    if (value) {
      console.log("You picked the true option")
      this.Drinking = true;
    }
    else {
      console.log("You picked the fakse option")
      this.Drinking = false
    }
    this.undecided = !this.undecided
  }

  questing(origin: string) {
    this.router.navigateByUrl(`/${this.data[0].lName}/${origin}/quests`);
  }
  }

