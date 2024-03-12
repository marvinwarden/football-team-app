import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import players from "../../assets/JSON/players.json";

@Injectable({
  providedIn: 'root'
})
export class PlayersServiceService {

  squad: any[] = [];

  constructor() { }

  getPlayers(): void {
    for (var player in players) {
      this.squad.push(player);
    }
    console.log(this.squad);
  }
  
}
