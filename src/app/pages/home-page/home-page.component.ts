import { Component, OnInit } from '@angular/core';
import { LeaguesService } from 'src/app/services/leagues.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  leagues = []

  constructor(private leaguesService : LeaguesService) { }

  ngOnInit(): void {
    this.leaguesService.getAll()
      .then( leagues => {
        this.leagues = leagues;
      })
  }

}
