import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersDetailsService {
  constructor(private httpClient: HttpClient) {}
  getRegistrationProfiles(): Observable < any > {
    return this.httpClient.get(environment.baseUrl + '/getRegistrationProfiles')
  }
  getjudges(): Observable < any >{
    return this.httpClient.get(environment.baseUrl+'/getJudgesList')
  }
  postMarks(data): Observable < any >{    
    return this.httpClient.post('http://localhost:3000/api/users/register',data);
  }
}
