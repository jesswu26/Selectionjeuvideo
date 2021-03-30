import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';


@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.scss']
})
export class OptionListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    M.AutoInit();
  }

}
