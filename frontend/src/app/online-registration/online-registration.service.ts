import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnlineRegistrationService {

  constructor(private http:HttpClient) { }
  getSlotType(id:any){
    return this.http.get('http://localhost:3000/api/form/getAvaliableSlot/'+ id)
  }
  getOnlineEvent(data){
    return this.http.post('http://localhost:3000/api/form/registration',data)
  }
}
