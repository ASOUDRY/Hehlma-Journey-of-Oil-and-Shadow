import { Component, Input } from '@angular/core';
import { AdventurePackage } from 'src/app/interfaces/adventure-package';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exploration',
  templateUrl: './exploration.component.html',
  styleUrls: ['./exploration.component.css']
})
export class ExplorationComponent {

constructor(private router: Router) {}

  @Input() data: AdventurePackage = {
    locationName: "",
    locationDescription: "",
    adventureOption1: "",
    adventureOption2: "",
    exploration1: "",
    exploration2: "",
    exploration3: "",
    enviormentalDescription: "",
    nextLocation: "",
    questName: ""
  };

navigate() {
   this.router.navigateByUrl(`/advancingToward/${this.data.nextLocation}`);
}
}
