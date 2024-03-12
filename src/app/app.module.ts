import { NgModule, Injectable } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballPitchComponent } from './tactic-board/football-pitch/football-pitch.component';
import { PlayerComponent } from './tactic-board/player/player.component';
import { MovePlayerDirective } from './directives/move-player.directive';



@NgModule({
  declarations: [
    AppComponent,
    FootballPitchComponent,
    PlayerComponent,
    MovePlayerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
