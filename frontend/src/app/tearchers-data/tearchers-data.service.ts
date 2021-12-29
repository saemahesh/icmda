import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TearchersDataService {

  private url="https://api.airtable.com/v0/appQBurwEOEyN9PXe/Table%201?maxRecords=3&view=Grid%20view";

  constructor(private http:HttpClient) { }

  getTeacherProfile(): Observable<any[]> {
    return this.http.get<any[]>(this.url, { headers: { 'Authorization': `Bearer keyqTM7fqRgqcPay3` } });
  }

}
