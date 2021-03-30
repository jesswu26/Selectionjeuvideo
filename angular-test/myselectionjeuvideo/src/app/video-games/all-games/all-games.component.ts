import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss']
})
export class AllGamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    M.AutoInit();
  }

}
