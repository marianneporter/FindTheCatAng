import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-game',
  templateUrl: './cat-game.component.html',
  styleUrls: ['./cat-game.component.scss']
})
export class CatGameComponent implements OnInit {

    constructor() { }

    hidingPlace = new Array<string|number>(36);
    catLocation: number = 0;
    userGuess: string|number = 0;
    catFound: boolean =false;

    ngOnInit(): void {
        for (let i=0; i<36; i++ ) {
            this.hidingPlace[i]=i + 1;
        }
        this.newCatLocation();
    }

    newCatLocation(): void {
        this.catLocation = Math.floor(Math.random() * 37);
    }

    checkGuess(guessLoc: number) {
        if (this.catLocation===this.hidingPlace[guessLoc]) {
            alert("cat found!!");
            this.catFound=true;
        } else {
            this.hidingPlace[guessLoc]="No!";
        }
    }

}
