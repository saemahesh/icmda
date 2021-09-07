import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }

  postUserDetails(reqObj: any):Observable<any>{
    return this.httpClient.post(environment.baseUrl + '/register', reqObj)
  }
 
}
