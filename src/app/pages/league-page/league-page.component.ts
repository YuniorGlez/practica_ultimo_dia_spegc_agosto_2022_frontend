import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/interfaces/team.interface';
import { LeaguesService } from 'src/app/services/leagues.service';
import { TeamsService } from 'src/app/services/team.service';
import { League } from '../home-page/home-page.component';

@Component({
  selector: 'app-league-page',
  templateUrl: './league-page.component.html',
  styleUrls: ['./league-page.component.scss']
})
export class LeaguePageComponent implements OnInit {
  league: League | null = null;
  teams : Team[] = []


  constructor(
    private activatedRoute: ActivatedRoute,
    private leagueService: LeaguesService,
    private teamsService: TeamsService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('leagueID') as string;
    this.leagueService.getOne(id)
      .then(league => {
        if (league) {
          this.league = league;
        }
      })
    this.teamsService.getAllTeamsFromThisLeague(id)
      .then(teams => {
        if (teams) {
          this.teams = teams;
        }
      })



  }
}
