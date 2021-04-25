import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Timing } from '../_models/timer';
import { TimerService } from '../_services/timer.service';

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
    ]),
    trigger('dropStatus', [
        state('hiding', style ({
            top: '-15rem',
            left: '25rem'        
        })),
        state('dropped', style ({          
            top: '0',
            left: '25rem'        
        })), 
        transition('hiding => dropped', [
            animate('2s ease', keyframes([
              style({ top: '-15rem', offset: 0 }),
              style({ top: '0rem', offset: 0.50 }),
              style({ top: '-2rem', offset: 0.75 }),
              style({ top: '0rem', offset: 1 })
            ]))
        ]),  
        transition('dropped => hiding', [
            animate('2s ease')
        ])  
    ]),     
]
})
export class CatGame2Component implements OnInit {

    constructor(public timer: TimerService) { }
  
    hidingPlace = new Array<HidingPlace>(36);
    catLocation: number = 0;
    userGuess: string|number = 0;
    catFound: boolean =false;   
    guessCount: number = 0;
    gridDisabled: boolean = true;
    startDisabled: boolean = false;

    dropStatus='hiding';

    bestScore: number = 0;
    bestTime: number = 0;

    get timing(): Timing {
        return this.timer.timing;
    }

    get bestTiming(): Timing {
        return this.timer.bestTime;
    }

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
            this.timer.stopTimer();
            this.catFound=true;   
            this.hidingPlace[guessLoc].revealState='revealed';        
            this.hidingPlace[guessLoc].value='';
            this.gridDisabled=true;
           

            if (this.bestScore === 0 ||
                     this.guessCount < this.bestScore) {
                this.bestScore = this.guessCount;
            }
            this.timer.checkIfBestTime();
            this.dropStatus="dropped"

        } else {
            this.hidingPlace[guessLoc].value="No!";
        }
    }

    startGame() {
        this.gridDisabled=false;
        this.startDisabled=true;
        this.timer.startTimer();
    }

    reset() {
        this.guessCount=0;
        this.timer.stopTimer();
        this.timer.resetTimer();
        this.initialiseGrid();
        this.startDisabled=false;
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
