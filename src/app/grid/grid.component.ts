import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HidingPlace } from '../_models/hidingPlace';

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
    gridDisabled: boolean = true;

    constructor() { }

    ngOnInit(): void {
        
        for (let i=0; i<36; i++ ) {
            this.hidingPlace[i] = {
                value: i+1,
                revealState: 'hiding'
            }
        }
       
    }

    

    checkGuess(guessLoc: number) {

    }

}
