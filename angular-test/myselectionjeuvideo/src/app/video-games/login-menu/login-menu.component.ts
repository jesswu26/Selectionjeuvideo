import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';


@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    M.AutoInit();
  }

}
