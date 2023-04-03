import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainGameComponent } from './main-game/main-game.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { QuestsComponent } from './quests/quests.component';

import { AdventureComponent } from './adventure/adventure.component';

const routes: Routes = [
  { path: 'hehl', component:MainGameComponent},
  { path: 'character', component:CharacterCreationComponent},
  {path: ':locations/:origin/quests', component:QuestsComponent},
  {path: 'adventure/:name', component:AdventureComponent},
  { path: '**', component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
