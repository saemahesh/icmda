import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private httpClient : HttpClient) { }get

  getArtistProfiles(): Observable<any>{
      return this.httpClient.get('http://localhost:3000/api/users/getProfiles')
  } 
}
