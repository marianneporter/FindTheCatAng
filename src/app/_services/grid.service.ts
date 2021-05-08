import { Injectable } from '@angular/core';
import { HidingPlace } from '../_models/hidingPlace';

@Injectable({
  providedIn: 'root'
})
export class GridService {

    hidingPlace = new Array<HidingPlace>(36);

    constructor() { }

    initialiseGrid() {
        for (let i=0; i<36; i++ ) {
            this.hidingPlace[i] = {
                value: i+1,
                revealState: 'hiding'
            }
        }        
    }
}
