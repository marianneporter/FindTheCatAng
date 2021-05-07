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

    headingStatus: string = 'visible';

    constructor(private gameStatusService: GameStatusService) { }

    ngOnInit(): void {
    }

    gridClicked(guessSuccess: boolean) {
        this.gameStatusService.incrementGuesses();
        guessSuccess ? this.successfulGuess() : this.wrongGuess();
    }

    successfulGuess() {
      
    }

    wrongGuess() {

    }

}
