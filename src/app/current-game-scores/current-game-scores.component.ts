import { Component, OnInit } from '@angular/core';
import { Timing } from '../_models/timer';
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

    constructor(private timer: TimerService) { }

    ngOnInit(): void {
    }

    reset() {

    }

    startGame() {

    }

}
