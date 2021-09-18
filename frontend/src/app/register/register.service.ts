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
 
  getMemberDetails(emailId : any){
    return this.httpClient.get(environment.baseUrl +'/get-details/' + emailId)
  }

  getTeacherFilter(reqObj: any){
    return this.httpClient.post(environment.baseUrl + '/get-details', reqObj)
  }
}
