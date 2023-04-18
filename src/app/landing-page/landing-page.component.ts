import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
   posts : any;
   Test : String = "Placeholder"
  constructor(private httpService: ServiceService) { }

    ngOnInit() {
      this.getDataFromApi();
    }
      async getDataFromApi() {
        const response = await firstValueFrom(this.httpService.getAdventure('Stirring Sea'));
        console.log(response);
      }
}