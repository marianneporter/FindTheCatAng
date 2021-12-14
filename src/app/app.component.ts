import { Component } from '@angular/core';
import { AppStateService } from './_services/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'FindTheCat';
       
    get enable(): string {
        return this.appState.displayWarning ? 'disabled' : 'enabled'; 
    }

    constructor(private appState: AppStateService) { }

}
