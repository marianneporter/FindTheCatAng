import { Component, OnInit } from '@angular/core';
import { Timing } from '../_models/timer';
import { GameStatusService } from '../_services/game-status.service';
import { GridService } from '../_services/grid.service';
import { TimerService } from '../_services/timer.service';


@Component({
  selector: 'app-best-scores',
  templateUrl: './best-scores.component.html',
  styleUrls: ['./best-scores.component.scss']
})
export class BestScoresComponent implements OnInit {

    bestScore: number = 0;

    get bestGuesses(): number {
        return this.gameStatus.bestGuesses;
    }

    get bestTiming(): Timing {
        return this.timer.bestTiming;
    }

    constructor( private timer: TimerService,
                 private gameStatus: GameStatusService,
                 private grid: GridService) { }

    ngOnInit(): void {
    }
    
    reset() {    
        this.timer.resetAllTimers(); 
        this.gameStatus.resetAllGuesses(); 
        this.grid.initialiseGrid();
    }

}
