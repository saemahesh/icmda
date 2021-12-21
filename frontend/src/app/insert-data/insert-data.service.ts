import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsertDataService {

  url="https://api.airtable.com/v0/appT3WEY9QoYDKuHH/details";


  constructor(private http:HttpClient) { }

  createDataInAirtable(requestBody: any)
  {
    const headers = { 'Authorization': `Bearer keyqTM7fqRgqcPay3`, 'Content-Type': "application/json" };
    let data = JSON.stringify(requestBody);
    return this.http.post(this.url, data, { headers });
  }
}
