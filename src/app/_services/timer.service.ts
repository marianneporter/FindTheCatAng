import { Injectable } from '@angular/core';
import { Timing } from '../_models/timer';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

    timing: Timing = {
        totalTimeTenths: 0,
        seconds: 0,
        tenths: 0
    }

    completedTime: Timing = {
        totalTimeTenths: 0,
        seconds: 0,
        tenths: 0
    }   

    bestTime: Timing = {
        totalTimeTenths: 0,
        seconds: 0,
        tenths: 0        
    }

    timer: any;

    newBestTime: boolean = false;

    constructor() { }

    startTimer() {
        this.newBestTime=false;
        this.timer = setInterval(() => {
            this.addTenthOfSecond(); 
        }, 100);       
    }

    endGame() {        
        this.completedTime = {...this.timing};
        this.stopTimer();  
        this.resetTimer();   
        if ( this.bestTime.totalTimeTenths === 0 ) {
            this.bestTime = { ...this.completedTime };  
        } else if (this.completedTime.totalTimeTenths < this.bestTime.totalTimeTenths) {
            this.bestTime = { ...this.completedTime };
            this.newBestTime = true;  
        }         
    }
 
    stopTimer() {
        clearInterval(this.timer);     
    }  
    
    addTenthOfSecond() {
        this.timing.totalTimeTenths++;
        this.timing.tenths=this.timing.totalTimeTenths % 10;
        this.timing.seconds = Math.floor(this.timing.totalTimeTenths/10);  
    }

    resetTimer() {
        this.timing.totalTimeTenths=0;
        this.timing.tenths=0;
        this.timing.seconds=0;         
    }

    resetAllTimers() {
        this.stopTimer();
        this.resetTimer();
        this.bestTime.totalTimeTenths=0;
        this.bestTime.tenths=0;
        this.bestTime.seconds=0;  
        this.completedTime.totalTimeTenths=0;
        this.completedTime.tenths=0;
        this.completedTime.seconds=0;
        
    }

}
