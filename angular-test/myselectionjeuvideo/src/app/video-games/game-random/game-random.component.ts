import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-game-random',
  templateUrl: './game-random.component.html',
  styleUrls: ['./game-random.component.scss']
})
export class GameRandomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    M.AutoInit();
  }

}
