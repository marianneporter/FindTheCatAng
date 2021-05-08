import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

    dropStatus='hiding';

    constructor() { } 

    drop() {
        this.dropStatus='dropped';
    }

}
