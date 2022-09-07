import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { PlayerPageComponent } from './pages/player-page/player-page.component';
import { LeaguePageComponent } from './pages/league-page/league-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TeamPageComponent,
    PlayerPageComponent,
    LeaguePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
