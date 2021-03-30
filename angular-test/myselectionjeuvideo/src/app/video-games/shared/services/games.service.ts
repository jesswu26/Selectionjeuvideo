import { Injectable } from '@angular/core';
import { Game } from '../models/game/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public game: Game = new Game();

  constructor() {
    console.log(this.game)
    this.game.price = 59;
    this.game.title = "Mario Kart 8 Deluxe";
    this.game.gameBox = 'https://images-na.ssl-images-amazon.com/images/I/91BphPXVYVL._AC_SY445_.jpg';
    this.game.description = "Bananes et carapaces sur place ou à emporter ! Appuyez sur le champignon et affûtez vos carapaces, Mario Kart 8 Deluxe va tout retourner sur Nintendo Switch ! Foncez à fond les ballons la tête à l'envers avec les pneus anti-gravité ! Irez-vous plus vite en passant par le plafond ? Ou allez-vous tracer au sol entre les bananes et les batailles de carapace ? Tous les coups les plus fourbes sont permis pour se hisser à la première place ! Maîtriser tous les pouvoirs comme la plume pour éviter les mauvaises surprises, ou encore le fantôme pour devenir invisible dans les 48 circuits légendaires ! ";
    this.game.available = true
    if (this.game.available = true)
     {const string = 'En stock'};
    this.game.platform = 'Nitendo Switch';
    console.log('this.game')

  }
}
