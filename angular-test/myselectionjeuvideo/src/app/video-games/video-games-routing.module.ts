import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllGamesComponent } from './all-games/all-games.component';
import { GameFormComponent } from './game-form/game-form.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameRandomComponent } from './game-random/game-random.component';
import { GameComponent } from './game/game.component';
import { LoginMenuComponent } from './login-menu/login-menu.component';
import { OptionListComponent } from './option-list/option-list.component';
import { VideoGamesComponent } from './video-games.component';

const routes: Routes = [
  {
    path: '',
    component: VideoGamesComponent,
    children: [
      {
        path: 'game/:id',
        component: GameComponent,
      },
      {
        path: 'preferences',
        component: GameFormComponent,
      },
      {
        path: 'mygames/:username',
        component: GameListComponent,
      },
      {
        path: 'random',
        component: GameRandomComponent,
      },
      {
        path: 'login',
        component: LoginMenuComponent,
      },
      {
        path: 'allgames',
        component: AllGamesComponent,
      },
      {
        path: 'options',
        component: OptionListComponent,
      },

    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoGamesRoutingModule { }
