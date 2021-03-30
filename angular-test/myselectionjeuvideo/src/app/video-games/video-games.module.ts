import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoGamesRoutingModule } from './video-games-routing.module';
import { GameRandomComponent } from './game-random/game-random.component';
import { GameFormComponent } from './game-form/game-form.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameComponent } from './game/game.component';
import { AllGamesComponent } from './all-games/all-games.component';
import { LoginMenuComponent } from './login-menu/login-menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoGamesComponent } from './video-games.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OptionListComponent } from './option-list/option-list.component';



@NgModule({
  declarations: [
    VideoGamesComponent,
    OptionListComponent,
    GameRandomComponent,
    GameFormComponent,
    GameListComponent,
    GameComponent,
    AllGamesComponent,
    LoginMenuComponent,
    NavbarComponent,
  ],

  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VideoGamesRoutingModule
  ],
  exports: [
    VideoGamesComponent,
    LoginMenuComponent,
    AllGamesComponent,
    OptionListComponent,
    GameFormComponent,
    GameRandomComponent,
    GameComponent,
    GameListComponent,
    NavbarComponent,
  ]
})
export class VideoGamesModule { }
