import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';


@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.scss']
})
export class VideoGamesComponent implements OnInit {
//public heroName: string = "Aquaman";
//private other: string = "Other";

//private myPrivate: string = "Private";

//private myprotected: string = "Protected";



  constructor() { }
  
  ngOnInit(): void {
    M.AutoInit();
  }

}
