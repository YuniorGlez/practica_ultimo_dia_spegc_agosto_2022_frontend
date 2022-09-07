import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LeaguePageComponent } from './pages/league-page/league-page.component';
import { PlayerPageComponent } from './pages/player-page/player-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';

const routes: Routes = [
  {
    path : "home",
    component : HomePageComponent
  },
  {
    path : "league/:leagueID",
    component : LeaguePageComponent
  }, 
  {
    path : "league/:leagueID/team/:teamID",
    component : TeamPageComponent
  },
  {
    path : "league/:leagueID/team/:teamID/player/:playerID",
    component : PlayerPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
