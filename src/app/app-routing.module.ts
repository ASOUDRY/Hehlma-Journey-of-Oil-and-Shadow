import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainGameComponent } from './main-game/main-game.component';
import { CharacterCreationComponent } from './loginAndRegistration/character-creation/character-creation.component';
import { QuestsComponent } from './social-components/quests/quests.component';
import { TravelComponent } from './travel/travel.component';

import { AdventureComponent } from './adventuring-components/adventure/adventure.component';

const routes: Routes = [
  { path: 'hehl', component:MainGameComponent},
  { path: 'character', component:CharacterCreationComponent},
  { path: ':locations/:origin/quests', component:QuestsComponent},
  // { path: 'adventure/:name', component:AdventureComponent},
  { path: 'proxy/:name', component:AdventureComponent},
  { path: 'traveling', component:TravelComponent},
  { path: '**', component:LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
