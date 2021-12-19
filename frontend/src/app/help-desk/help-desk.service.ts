import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpDeskService {

  url="https://api.airtable.com/v0/appubs0zPp9o7hrQn/Table%201?maxRecords=10&view=Grid%20view";


  constructor(private http:HttpClient) { }

  getFaqData():Observable<any[]>
  {
    return this.http.get<any[]>(this.url, { headers: { 'Authorization': `Bearer keyqTM7fqRgqcPay3` } });
  }
}
