import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit, NgModule, inject } from '@angular/core';

import { PlayerComponent } from '../player/player.component';
import { PlayersServiceService } from 'src/app/services/players-service.service';



@Component({
  selector: 'app-football-pitch',
  templateUrl: './football-pitch.component.html',
  styleUrls: ['./football-pitch.component.css'],
  providers: [ PlayersServiceService ]
})
export class FootballPitchComponent implements OnInit {

  team: any[] = this.playerService.squad;


  constructor(private playerService: PlayersServiceService) {
      
  }

  
  ngOnInit(): void {
    this.playerService.getPlayers();
  }

}
