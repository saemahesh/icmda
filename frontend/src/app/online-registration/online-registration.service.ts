import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OnlineRegistrationService {

  constructor(private http: HttpClient) { }
  getSlotType(id: any) {
    return this.http.get(environment.apiUrl + '/form/getAvaliableSlot/' + id)
  }
  getOnlineEvent(data) {
    return this.http.post(environment.apiUrl + '/form/registration', data)
  }
  sendemailsdata(data) {
    return this.http.post(environment.baseUrl + '/send-prize-mail', data)
  }
  paymentData(data) {
    return this.http.post(environment.apiUrl + '/form/create-payment-code', data)
  }
  getSlotTypes() {
    return this.http.get(environment.apiUrl + '/form/getslotType');
  }
  getPaymentHistoryList() {
    return this.http.get(environment.apiUrl + '/form/getPaymentHistoryList')
  }
  getDetails(data) {
    return this.http.get(environment.apiUrl + '/form/getDecemberEventById/' + data);
  }
  updateEvents(data) {
    return this.http.put(environment.apiUrl + '/form/updateDecemberEvent', data);
  }
}

