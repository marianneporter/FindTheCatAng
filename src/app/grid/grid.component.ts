import { Component, OnInit } from '@angular/core';
import { HidingPlace } from '../_models/hidingPlace';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

    hidingPlace = new Array<HidingPlace>(36);
    gridDisabled: boolean = true;

    constructor() { }

    ngOnInit(): void {
    }

    checkGuess(guessLoc: number) {

    }

}
