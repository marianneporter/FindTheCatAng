import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { CatGameComponent } from './cat-game/cat-game.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CurrentGameScoresComponent } from './current-game-scores/current-game-scores.component';
import { GridComponent } from './grid/grid.component';
import { BestScoresComponent } from './best-scores/best-scores.component';
import { DemoWarningComponent } from './demo-warning/demo-warning.component';

@NgModule({
  declarations: [
    AppComponent,
    CatGameComponent,
    DropdownComponent,
    CurrentGameScoresComponent,
    GridComponent,
    BestScoresComponent,
    DemoWarningComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
