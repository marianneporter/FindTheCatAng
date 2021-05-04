import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { CatGame2Component } from './cat-game2/cat-game2.component';
import { CatGameComponent } from './cat-game/cat-game.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CurrentGameScoresComponent } from './current-game-scores/current-game-scores.component';
import { GridComponent } from './grid/grid.component';
import { BestScoresComponent } from './best-scores/best-scores.component';

@NgModule({
  declarations: [
    AppComponent,
    CatGame2Component,
    CatGameComponent,
    DropdownComponent,
    CurrentGameScoresComponent,
    GridComponent,
    BestScoresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
