import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

    dropStatus='hiding';
    dropMessage='';

    constructor() { } 

    drop(newBestGuess: boolean, newBestTime: boolean) {

        this.dropStatus='dropped';

   
        if (newBestTime) {
            if (newBestGuess) {
                this.dropMessage='Well done you have achieved a new best time and best number of guesses';
            } else {
                this.dropMessage='Well done you have achieved a new best time';
            }
        }
        else {
            if (newBestGuess) {
                this.dropMessage='Well done you have achieved your best number of guesses';
            } else {
                this.dropMessage='';
            }                    
        }
    }
} 