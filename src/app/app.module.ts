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
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdventureComponent } from './adventure/adventure.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { QuestsComponent } from './quests/quests.component';
import { MerchantsComponent } from './merchants/merchants.component';
import { LocationComponent } from './location/location.component';
import { CombatComponent } from './combat/combat.component';
import { FightComponent } from './fight/fight.component';
import { StealthComponent } from './stealth/stealth.component';
import { AdventureBootyComponent } from './adventure-booty/adventure-booty.component';

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
    CombatComponent,
    FightComponent,
    StealthComponent,
    AdventureBootyComponent,
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
