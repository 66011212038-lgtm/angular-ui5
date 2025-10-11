import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../config/constants';
import { lastValueFrom } from 'rxjs';
import { GameGetRes } from '../../model/Game_gat_tes';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private constants: Constants, private http: HttpClient) {}

  async searchgame(searchgame: string, searchtype: string) {
    const url = this.constants.API_ENDPOINT + '/search';
    const body = { name: searchgame, type_name: searchtype };
    const response = await lastValueFrom(this.http.post<GameGetRes[]>(url, body));
    return response;
  }

  
 async gamepage() {
  const url = this.constants.API_ENDPOINT + '/gamepage';
  const response = await lastValueFrom(this.http.get<GameGetRes[]>(url)); 
  return response;
}

 async member() {
  const url = this.constants.API_ENDPOINT + '/member';
  const response = await lastValueFrom(this.http.get<GameGetRes[]>(url)); 
  return response;
}



  // async gamepage(game:string,image: string) {
  //   const url = this.constants.API_ENDPOINT + '/gamepage';
  //   const response = await lastValueFrom(this.http.get(url));
  //   return response as GameGetRes[];
  // }

  addTransaction(data: { amount: number, transaction_status: number }) {
   const url = this.constants.API_ENDPOINT + '/transaction';
  return lastValueFrom(this.http.post(url, data));
}


}
