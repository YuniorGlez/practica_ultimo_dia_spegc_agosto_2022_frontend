import { Injectable } from '@angular/core';
import axios from 'axios';
import { League } from '../pages/home-page/home-page.component';


@Injectable({
  providedIn: 'root'
})
export class LeaguesService {
  url = 'https://footbal-api.herokuapp.com/leagues'

  constructor() { }

  // getAll(){
  //   return axios.get<League[]>(this.url)
  //     .then(res => {
  //       return res.data
  //     })
  // }

  // getAll(){
  //   return axios.get(this.url)
  //     .then(res => {
  //       return res.data
  //     }) as Promise<League[]>
  // }

  getAll(): Promise<League[]> {
    return axios.get<League[]>(this.url)
      .then(res => {
        return res.data
      })
  }

}
