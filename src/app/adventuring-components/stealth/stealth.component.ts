import { Component, Input } from '@angular/core';
import { StealthData } from 'src/app/interfaces/StealthData';
import { AdventurePackage } from 'src/app/interfaces/adventure-package';

@Component({
  selector: 'app-stealth',
  templateUrl: './stealth.component.html',
  styleUrls: ['./stealth.component.css']
})
export class StealthComponent {


  @Input() stealthData: StealthData = {
    stealth1: "",
    stealth2: ""
  };

  primary: string = "You attempt to sneak past the Owalarsterin, carefully creaping along all the debree. Eventually the creature submerges back into the oily water and you are home free."

  secondary: string = "Yosh"
}
