import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

interface HidingPlace {
    value: string|number;
    revealState: string;
}

@Component({
  selector: 'app-cat-game2',
  templateUrl: './cat-game2.component.html',
  styleUrls: ['./cat-game2.component.scss'],
  animations: [
    trigger('revealCat', [
      state('hiding', style ({
          maxHeight: '7rem'        
      })),
      state('revealed', style ({          
          maxHeight: '0'        
      })),
      transition('hiding => revealed', [
          animate('1s ease-in')
      ]),  
      transition('revealed => hiding', [
        animate('1s ease-in')
      ])               
    ])
]
})
export class CatGame2Component implements OnInit {

    constructor() { }
  
    hidingPlace = new Array<HidingPlace>(36);
    catLocation: number = 0;
    userGuess: string|number = 0;
    catFound: boolean =false;
    controlState='hiding';
    guessCount: number = 0;
    gridDisabled: boolean = true;

    ngOnInit(): void {
        this.initialiseGrid();
        this.newCatLocation();
        console.log(this.hidingPlace);
    }

    newCatLocation(): void {
    //   this.catLocation = Math.floor(Math.random() * 37);
     this.catLocation=3;
    }

    checkGuess(guessLoc: number) {  
        this.guessCount++;
        if (this.catLocation===this.hidingPlace[guessLoc].value) {
            this.catFound=true;   
            this.hidingPlace[guessLoc].revealState='revealed';        
            this.hidingPlace[guessLoc].value='';
            this.gridDisabled=true;
        } else {
            this.hidingPlace[guessLoc].value="No!";
        }
    }

    startGame() {
        this.gridDisabled=false;
    }

    tryAgain() {
        this.guessCount=0;
        this.initialiseGrid();
    }

    initialiseGrid() {
        for (let i=0; i<36; i++ ) {
            this.hidingPlace[i] = {
                value: i+1,
                revealState: 'hiding'
            }
        }
    }

}
