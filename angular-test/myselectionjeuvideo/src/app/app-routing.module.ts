import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'video-games',
    loadChildren: () => import('./video-games/video-games.module').then(m => m.VideoGamesModule)
  },
{
   path: '**',
   redirectTo : 'video-games/mygames/toto'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
