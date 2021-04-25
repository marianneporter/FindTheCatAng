import { Injectable } from '@angular/core';
import { Timing } from '../_models/timer';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

    timing: Timing = {
        totalTimeTenths: 0,
        minutes: 0,
        seconds: 0,
        tenths: 0
    }

    bestTime: Timing = {
        totalTimeTenths: 0,
        minutes: 0,
        seconds: 0,
        tenths: 0        
    }

    timer: any;

    constructor() { }

    startTimer() {
        this.timer = setInterval(() => {
            this.addTenthOfSecond(); 
        }, 100);       
    }

 
    stopTimer() {
        clearInterval(this.timer);     
    }  
    
    addTenthOfSecond() {
        this.timing.totalTimeTenths++;

        this.timing.tenths=this.timing.totalTimeTenths % 10;

        let wholeSeconds = Math.floor(this.timing.totalTimeTenths/10);
        this.timing.seconds=wholeSeconds % 60;
        this.timing.minutes=Math.floor(wholeSeconds/60);

    }

    resetTimer() {
        this.timing.totalTimeTenths=0;
        this.timing.tenths=0;
        this.timing.minutes=0;
        this.timing.seconds=0;
    }

    checkIfBestTime() {
        if ( this.bestTime.totalTimeTenths === 0
            || this.timing.totalTimeTenths < this.bestTime.totalTimeTenths) {
                this.bestTime = { ...this.timing };
            }
    }


}
