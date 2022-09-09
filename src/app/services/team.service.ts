import { Injectable } from '@angular/core';
import axios from 'axios';
import { Team } from '../interfaces/team.interface';


@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  url = "https://footbal-api.herokuapp.com/teams";

  constructor() { }



  getAllTeamsFromThisLeague( leagueID : string): Promise<Team[]> {
    return axios.get<Team[]>(this.url + '?Liga=' + leagueID)
      .then(res => {
        return res.data
      })
  }


  getOne(teamID : string){
    return axios.get<Team>(this.url + '/' + teamID)
    .then(res => {
      return res.data
    })

  }
}
