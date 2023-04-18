import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import {MatTableModule} from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainGameComponent } from './main-game/main-game.component';
import { HttpClientModule } from  '@angular/common/http';
import { CharacterCreationComponent } from './loginAndRegistration/character-creation/character-creation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdventureComponent } from './adventuring-components/adventure/adventure.component';
import { DialogueComponent } from './social-components/dialogue/dialogue.component';
import { ShoppingComponent } from './social-components/shopping/shopping.component';
import { LoginComponent } from './loginAndRegistration/login/login.component';
import { RegistrationComponent } from './loginAndRegistration/registration/registration.component';
import { QuestsComponent } from './social-components/quests/quests.component';
import { MerchantsComponent } from './social-components/merchants/merchants.component';
import { LocationComponent } from './social-components/location/location.component';
import { FightComponent } from './adventuring-components/fight/fight.component';
import { StealthComponent } from './adventuring-components/stealth/stealth.component';
import { AdventureBootyComponent } from './adventuring-components/adventure-booty/adventure-booty.component';
import { ExplorationComponent } from './adventuring-components/exploration/exploration.component';
import { TravelComponent } from './travel/travel.component';
import { QuestEncounterComponent } from './adventuring-components/quest-encounter/quest-encounter.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MainGameComponent,
    CharacterCreationComponent,
    AdventureComponent,
    DialogueComponent,
    ShoppingComponent,
    LoginComponent,
    RegistrationComponent,
    QuestsComponent,
    MerchantsComponent,
    LocationComponent,
    FightComponent,
    StealthComponent,
    AdventureBootyComponent,
    ExplorationComponent,
    TravelComponent,
    QuestEncounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressBarModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
