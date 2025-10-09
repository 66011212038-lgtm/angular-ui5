import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TripService { 

  constructor(private http: HttpClient) {}


}


