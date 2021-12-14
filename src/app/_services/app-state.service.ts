import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

    constructor() { }
    
    private _displayWarning: boolean = false;

    get displayWarning(): boolean {
        return this._displayWarning;    
    }

    set displayWarning(value: boolean) {
        this._displayWarning = value;
    }  
        
    removeWarning() {
        sessionStorage.setItem('warningAlreadyShown', 'true');
        this._displayWarning = false;
    }
}
