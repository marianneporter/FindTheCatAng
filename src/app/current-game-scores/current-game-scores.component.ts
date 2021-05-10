import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Timing } from '../_models/timer';
import { GameStatusService } from '../_services/game-status.service';
import { GridService } from '../_services/grid.service';
import { TimerService } from '../_services/timer.service';

@Component({
  selector: 'app-current-game-scores',
  templateUrl: './current-game-scores.component.html',
  styleUrls: ['./current-game-scores.component.scss']
})
export class CurrentGameScoresComponent implements OnInit {

    startDisabled: boolean = false;


    get timing(): Timing {
        return this.timer.timing;
    }
    
    get guesses(): number {
        return this.gameStatus.guesses;
    }

    constructor(private timer: TimerService,
                private gameStatus: GameStatusService,
                private grid: GridService) { }

    ngOnInit(): void {
    }

    reset() {    
        debugger;
        this.timer.stopTimer();
        this.timer.resetTimer();   
        this.gameStatus.resetGuesses(); 
        this.grid.initialiseGrid();
    }

    startGame() {
        this.gameStatus.startGame();
        this.timer.startTimer();
        
    }

}
