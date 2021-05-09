import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStatusService {

    gameInProcess: boolean = false;
    newBestGuess = false;

    guesses: number = 0; 
    bestGuesses: number = 0; 
   
    headingStatus: string = 'visible';    
   
    constructor() { }

    startGame() {
        this.gameInProcess = true;      
    }

    incrementGuesses() {
        this.guesses++;
    }

    endGame() {
        if (this.bestGuesses === 0) {
            this.bestGuesses = this.guesses;
        } else if (this.guesses < this.bestGuesses) {
            this.bestGuesses = this.guesses;
            this.newBestGuess = true;
        }
        this.gameInProcess=false;
    }

    resetGuesses() {
        this.guesses=0;
    }

    hideHeading() {
        this.headingStatus="invisible";
    }

    showHeading() {
        this.headingStatus="visible";
    }
    

    
}
