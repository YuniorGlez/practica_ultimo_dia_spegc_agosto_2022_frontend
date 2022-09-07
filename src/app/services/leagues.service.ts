import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class LeaguesService {
  url = 'https://footbal-api.herokuapp.com/leagues'

  constructor() { }

  getAll(){
    return axios.get(this.url)
      .then(res => {
        return res.data
      })
  }

}
