import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainGameComponent } from './main-game/main-game.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';

const routes: Routes = [
  { path: 'hehl', component:MainGameComponent},
  { path: 'character', component:CharacterCreationComponent},
  { path: 'login-register', component:LoginRegistrationComponent},
  { path: '**', component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
