import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStatusService {

    gameInProcess: boolean = false;
    guesses: number = 0;  
    
   
    constructor() { }

    startGame() {
        this.gameInProcess = true;
      
    }

    incrementGuesses() {
        this.guesses++;
    }


    
}
