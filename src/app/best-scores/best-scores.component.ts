import { Component, OnInit } from '@angular/core';
import { Timing } from '../_models/timer';
import { GameStatusService } from '../_services/game-status.service';
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
        return this.timer.bestTime;
    }

    constructor( private timer: TimerService,
                 private gameStatus: GameStatusService) { }

    ngOnInit(): void {
    }

}
