import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EventRegisterService {
 

  constructor(private httpClient:HttpClient) { }
  postEventDetails(reqObj: any):Observable<any>{
    return this.httpClient.post(environment.baseUrl+'/event-register',reqObj)
  }
 
}