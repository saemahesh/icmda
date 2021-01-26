import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdcardService {
  baseUrl : string;

  constructor(private httpClient : HttpClient) { 
      this.baseUrl = environment.baseUrl;
  }

  getProfile(profileId: any): Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/get-member/${profileId}`);
  }
}
