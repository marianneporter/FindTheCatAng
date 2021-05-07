import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HidingPlace } from '../_models/hidingPlace';
import { GameStatusService } from '../_services/game-status.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  animations: [
    trigger('revealCat', [
      state('hiding', style ({
          maxHeight: '7rem'        
      })),
      state('revealed', style ({          
          maxHeight: '0'        
      })),
      transition('hiding => revealed', [
          animate('1s ease-in')
      ]),  
      transition('revealed => hiding', [
        animate('1s ease-in')
      ])               
    ]) 
]

})
export class GridComponent implements OnInit {

    hidingPlace = new Array<HidingPlace>(36);

    catLocation: number=0;

    get gameInProcess(): boolean {
        return this.gameStatus.gameInProcess;
    }

    @Output() guessSuccess = new EventEmitter<boolean>();

    constructor(private gameStatus: GameStatusService) { }

    ngOnInit(): void {
        
        for (let i=0; i<36; i++ ) {
            this.hidingPlace[i] = {
                value: i+1,
                revealState: 'hiding'
            }
        }

        this.catLocation=3;
       
    }

    checkGuess(guessLoc: number) {
        //check what the user gguesses
        //emit true or false to say user has clicked and whthere the click is right or not
        //https://angular.io/guide/inputs-outputs
        //next aim get app so it can count guesses
    }

}
