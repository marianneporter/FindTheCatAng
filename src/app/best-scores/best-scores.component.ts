import { Component, OnInit } from '@angular/core';
import { Timing } from '../_models/timer';
import { TimerService } from '../_services/timer.service';


@Component({
  selector: 'app-best-scores',
  templateUrl: './best-scores.component.html',
  styleUrls: ['./best-scores.component.scss']
})
export class BestScoresComponent implements OnInit {

    bestScore: number = 0;

    get bestTiming(): Timing {
        return this.timer.bestTime;
    }

    constructor( private timer: TimerService) { }

    ngOnInit(): void {
    }

}
