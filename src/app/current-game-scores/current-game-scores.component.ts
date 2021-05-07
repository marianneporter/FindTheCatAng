import { Component, OnInit } from '@angular/core';
import { Timing } from '../_models/timer';
import { GameStatusService } from '../_services/game-status.service';
import { TimerService } from '../_services/timer.service';

@Component({
  selector: 'app-current-game-scores',
  templateUrl: './current-game-scores.component.html',
  styleUrls: ['./current-game-scores.component.scss']
})
export class CurrentGameScoresComponent implements OnInit {

    guessCount: number = 0;

    startDisabled: boolean = false;
    
    get timing(): Timing {
        return this.timer.timing;
    }
    
    get guesses(): number {
        return this.gameStatus.guesses;
    }

    constructor(private timer: TimerService,
                private gameStatus: GameStatusService) { }

    ngOnInit(): void {
    }

    reset() {
        this.guessCount=0;
        this.timer.stopTimer();
        this.timer.resetTimer();    
    }

    startGame() {
        this.gameStatus.startGame();
        this.timer.startTimer();
        
    }

}
