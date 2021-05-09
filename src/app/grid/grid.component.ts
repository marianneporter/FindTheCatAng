import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HidingPlace } from '../_models/hidingPlace';
import { DropdownService } from '../_services/dropdown.service';
import { GameStatusService } from '../_services/game-status.service';
import { GridService } from '../_services/grid.service';
import { TimerService } from '../_services/timer.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
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
export class GridComponent implements OnInit {

  //  hidingPlace = new Array<HidingPlace>(36);

    catLocation: number=0;

    get gameInProcess(): boolean {
        return this.gameStatus.gameInProcess;
    }

    get hidingPlace(): Array<HidingPlace> {
        return this.grid.hidingPlace;
    }
 
  //  @Output() guessSuccess = new EventEmitter<boolean>();

    constructor(private gameStatus: GameStatusService,
                private grid: GridService,
                private timer: TimerService,
                private dropdown: DropdownService  ) { }

    ngOnInit(): void {      

        this.grid.initialiseGrid();

        this.catLocation=3;
       
    }

    checkGuess(guessLoc: number) {
       
        if (this.hidingPlace[guessLoc].value == this.catLocation) {
            this.successfulGuess(guessLoc);
        } else {
            this.hidingPlace[guessLoc].value='No!';
            this.gameStatus.incrementGuesses();
        }      
    }

    successfulGuess(guessLoc:number) {
        this.timer.endGame();    
        this.gameStatus.incrementGuesses();
        this.gameStatus.endGame();
        this.hidingPlace[guessLoc].value='';
        this.hidingPlace[guessLoc].revealState='revealed';
        
        this.dropdown.drop();
        this.gameStatus.hideHeading();      
    }

}
