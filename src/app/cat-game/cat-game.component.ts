import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { GameStatusService } from '../_services/game-status.service';

@Component({
  selector: 'app-cat-game',
  templateUrl: './cat-game.component.html',
  styleUrls: ['./cat-game.component.scss'],
  animations: [  
    trigger('headingStatus', [
        state('visible', style ({
            opacity: '1'  
        })),
        state('invisible', style ({          
            opacity: '0',    
        })), 
        transition('visible <=> invisible', [
            animate('1s ease')
        ])  
    ]),         
]
})
export class CatGameComponent implements OnInit {

    get headingStatus(): string {
        return this.gameStatus.headingStatus;
    }

    constructor(private gameStatus: GameStatusService) { }

    ngOnInit(): void {
    }    
}
