import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { AppStateService } from './_services/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: ([
    trigger('enable', [
        state('enabled', style ({
            opacity: '1'  
        })),
        state('disabled', style ({          
            opacity: '0.5',    
        })), 
        transition('disabled => enabled', [
            animate('2s 1s ease')
        ])  
    ]),  
  ])
})

export class AppComponent {
    title = 'FindTheCat';    
       
    get enable(): string {
        return this.appState.displayWarning ? 'disabled' : 'enabled'; 
    }

    constructor(private appState: AppStateService) { 
        console.log('displayWarning is ' + this.appState.displayWarning);
    }

}
