import { Component, OnInit } from '@angular/core';
import { Game } from '../shared/models/game/game.model';
import { GameService } from '../shared/services/games.service';

import * as M from 'materialize-css';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

 public game: Game;

  constructor(private gameService: GameService) { 
   // private router : Router
    this.game= gameService.game;
  }

  ngOnInit(): void {
    M.AutoInit();
  }
  
  // validate()
  // {
  //   this.router.navigateByUrl("heroes")
  // }
  validatePreferences() {

  }
}
