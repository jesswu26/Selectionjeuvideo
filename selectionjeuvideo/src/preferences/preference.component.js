import noUiSlider from 'nouislider';
import { JeuProposeComponent } from '../jeupropose/jeupropose.component';
import template from './preferences.html';
import { Verify } from './../shared/service/verify.service';
 
export class PreferencesComponent {
 
    constructor(Preferences) {
        this.displayPreferences(document.querySelector("main"));
    };
 
    displayPreferences(element) {
        element.innerHTML = template;
        this.displaySlider();
        this.displaySliderPrice();
        const giveFormGame = document.querySelector("#mon-bouton-oui");
        giveFormGame.onclick = (element => {
            this.verify();
        });
    };
 
    displaySlider() {
        var slider = document.getElementById('test-slider');
        noUiSlider.create(slider, {
            start: [0, 100],
            connect: true,
            step: 10,
            orientation: 'horizontal',
            range: {
                'min': 0,
                'max': 100
            },
        });
    }
 
    displaySliderPrice() {
        const slider = document.getElementById('test-slider');
        slider.noUiSlider.on("change", () => {
            console.log(slider.noUiSlider.get());
            document.querySelector(".min").innerHTML = slider.noUiSlider.get()[0]
            document.querySelector(".max").innerHTML = slider.noUiSlider.get()[1]
        });
    };
 
    displayErrorMessage() {
        const errorMessage = document.querySelector(".erreur-message");
        errorMessage.innerHTML = "Vous devez cocher au moins une case";
    };
 
    verify() {
        const hasBeenVerified = Verify.verify() ;
        if(false === hasBeenVerified) {
            this.displayErrorMessage();
        }
        else if(true === hasBeenVerified) {
            new JeuProposeComponent;
        };
    };
}