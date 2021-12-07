import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStatusService {

    gameInProcess: boolean = false;
    firstAttempt = true;
    newBestGuess = false;

    catLocation: number = 0;
    guesses: number = 0; 
    bestGuesses: number = 0; 
   
    headingStatus: string = 'visible';    
   
    constructor() { }

    startGame() {
  //      this.catLocation = Math.floor(Math.random() * 36) + 1;
        this.catLocation = 7;
        this.gameInProcess = true;  
        this.newBestGuess=false;   
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

    resetAllGuesses() {
        this.guesses=0;
        this.bestGuesses=0;
    }

    hideHeading() {
        this.headingStatus="invisible";
    }

    showHeading() {
        this.headingStatus="visible";
    }
    

    
}
