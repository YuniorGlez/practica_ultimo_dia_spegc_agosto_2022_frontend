import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/interfaces/team.interface';
import { TeamsService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {

  team: Team | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private teamsService: TeamsService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('teamID') as string;
    this.teamsService.getOne(id)
      .then( team => {
        this.team = team;
      })


  }

}
