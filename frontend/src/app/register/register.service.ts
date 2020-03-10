import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }

  postUserDetails(reqObj){
    console.log('reqObj ', reqObj);
    return this.httpClient.post('http://localhost:3000/api/users/register',reqObj)
  }
 
}
