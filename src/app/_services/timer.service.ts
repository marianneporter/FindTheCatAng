import { Injectable } from '@angular/core';
import { Observable, interval, Subject } from 'rxjs';
import { repeatWhen, takeUntil } from 'rxjs/operators';
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

    latestTiming: Timing = {
        totalTimeTenths: 0,
        seconds: 0,
        tenths: 0
    }   

    bestTiming: Timing = {
        totalTimeTenths: 0,
        seconds: 0,
        tenths: 0        
    }

    timer = new Observable<number>();
    timerObserver: any;
    tenthsSeconds$ = interval(100);
    
    stop$ = new Subject<void>();
    start$ = new Subject<void>();   

    newBestTime: boolean = false;
    

    constructor() {
        this.timer = this.tenthsSeconds$.pipe(           
            repeatWhen(()=> this.start$),
            takeUntil(this.stop$)         
        )  

        this.timerObserver = {
            next: (n: number) => {
                this.timing.totalTimeTenths = n;
                this.timing.tenths=this.timing.totalTimeTenths % 10;
                this.timing.seconds = Math.floor(this.timing.totalTimeTenths/10);
            },
            complete: () => {
                this.latestTiming = { ...this.timing};
            }
        };   
    }

    startTimer() {
        this.newBestTime=false;
        this.start$.next();  
        this.timer.subscribe(this.timerObserver);         
    }

    endGame() {    
        this.stop$.next();  
        this.resetTiming(); 
        if ( this.bestTiming.totalTimeTenths === 0 ) {
            this.bestTiming = { ...this.latestTiming };  
        } else if (this.latestTiming.totalTimeTenths < this.bestTiming.totalTimeTenths) {
            this.bestTiming = { ...this.latestTiming };
            this.newBestTime = true;  
        }        
    }
 
    stopTimer() {
        this.stop$.next();
    }  

    resetAllTimers() {
        this.stopTimer();
        this.resetTiming();
        this.bestTiming={totalTimeTenths: 0, tenths: 0, seconds: 0};
        this.latestTiming={totalTimeTenths: 0, tenths: 0, seconds: 0};        
    }
    
    resetTiming() {
        this.timing={totalTimeTenths: 0, tenths: 0, seconds: 0};    
    }

}
