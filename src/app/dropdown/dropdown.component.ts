import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Timing } from '../_models/timer';
import { DropdownService } from '../_services/dropdown.service';
import { GameStatusService } from '../_services/game-status.service';
import { GridService } from '../_services/grid.service';
import { TimerService } from '../_services/timer.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [ 
    trigger('dropStatus', [
        state('hiding', style ({
            top: '-50%'    
        })),
        state('dropped', style ({          
            top: '0'        
        })), 
        transition('hiding => dropped', [
            animate('2s ease', keyframes([
              style({ top: '-50%', offset: 0 }),
              style({ top: '0', offset: 0.50 }),
              style({ top: '-5%', offset: 0.75 }),
              style({ top: '0', offset: 1 })
            ]))
        ]),  
        transition('dropped => hiding', [
            animate('2s ease')
        ])  
    ]),          
]
})
export class DropdownComponent implements OnInit {

    get dropStatus() {
        return this.dropdown.dropStatus;
    }  
 
    get dropMessage() {
        return this.dropdown.dropMessage;
    }     
    
    get timing(): Timing {
        return this.timer.completedTime;
    }
   
    get guesses(): number {
        return this.gameStatus.guesses;
    }

    dropdownBestMessage: string = '';

    guessCount: number = 0;

    constructor(private timer: TimerService,
                private dropdown: DropdownService,
                private grid: GridService,
                private gameStatus: GameStatusService  ) { }

    ngOnInit(): void {
    }

    playAgain() {
        this.dropdown.dropStatus='hiding'
        this.gameStatus.showHeading();
        this.grid.initialiseGrid();
        this.gameStatus.resetGuesses();
 //       this.timer.resetTimer();
    }
}
