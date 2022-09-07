import { Component, OnInit } from '@angular/core';
import { LeaguesService } from 'src/app/services/leagues.service';

export interface League {
  'Nombre De La Liga': string;
  Identificador: string;
  'Logo de la Liga': string;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  leagues : League[] = []

  constructor(private leaguesService : LeaguesService) { }

  ngOnInit(): void {
    this.leaguesService.getAll()
      .then( leagues => {
        this.leagues = leagues;
      })
  }

}
