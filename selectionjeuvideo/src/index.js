import 'nouislider';
import "materialize-css";
import { JeuProposeComponent } from "./jeupropose/jeupropose.component";
import { AccueilComponent } from './accueil/accueil.component';
import { PreferencesComponent } from "./preferences/preference.component";
import { putNavBar } from "./shared/navbar"
import { viewAccueil } from "./accueil/accueil";
import { viewMaBibliotheque } from "./mabibliotheque/mabibliotheque";
import { viewMenuDeSelection } from "./menudeselection/menudeselection";
import { viewPreferences } from "./preferences/preferences";
import { viewJeuPropose } from "./jeupropose/jeupropose";
import { Jeu } from './shared/models/jeu.model';
import { MenuDeSelectionComponent } from './menudeselection/menudeselection.component';
import { MaBibliothequeComponent } from './mabibliotheque/mabibliotheque.component';


if (window.cordova) {
    window.addEventListener("deviceready", () => {
        new PreferencesComponent();
        putNavBar(document.querySelector("header"));
    });
} else {
    new PreferencesComponent();
    putNavBar(document.querySelector("header"));
}





putNavBar(document.querySelector("header"));

new PreferencesComponent;
// new AccueilComponent;
// new JeuProposeComponent;
// new AccueilComponent;
// new MenuDeSelectionComponent;
// new MaBibliothequeComponent;
