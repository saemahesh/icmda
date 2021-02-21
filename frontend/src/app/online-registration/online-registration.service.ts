import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnlineRegistrationService {

  constructor(private http:HttpClient) { }
  getSlotType(id:any){
    return this.http.get('http://localhost:3000/api/users/slotType', {params:{slotId:id}})
  }
  getOnlineEvent(data){
    return this.http.post('http://localhost:3000/api/users/onlineEvents',data)
  }
}
