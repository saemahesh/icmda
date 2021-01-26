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
}
