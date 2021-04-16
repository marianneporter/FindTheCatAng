import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatGameComponent } from './cat-game/cat-game.component';
import { PractiseAnimationsComponent } from './practise-animations/practise-animations.component';

@NgModule({
  declarations: [
    AppComponent,
    CatGameComponent,
    PractiseAnimationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
