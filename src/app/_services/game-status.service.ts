import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStatusService {

    gameInProcess: boolean = false;
    guesses: number = 0;  

    headingStatus: string = 'visible';
    
   
    constructor() { }

    startGame() {
        this.gameInProcess = true;      
    }

    incrementGuesses() {
        this.guesses++;
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
