import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpDeskService {

  url="https://api.airtable.com/v0/appcs1MTfB8T5HKL3/FAQ?maxRecords=100&view=FAQ";


  constructor(private http:HttpClient) { }

  getFaqData():Observable<any[]>
  {
    return this.http.get<any[]>(this.url, { headers: { 'Authorization': `Bearer keyqTM7fqRgqcPay3` } });
  }
}
