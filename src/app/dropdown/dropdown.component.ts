import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Timing } from '../_models/timer';
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

    dropStatus='hiding';
    dropdownBestMessage: string = '';

    guessCount: number = 0;
    
    get timing(): Timing {
        return this.timer.timing;
    }

    constructor(private timer: TimerService) { }

    ngOnInit(): void {
    }

    playAgain() {

    }

}
