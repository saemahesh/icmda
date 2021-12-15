import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KuchipudiEvent2021Service {

  private url="https://api.airtable.com/v0/apphcypxnexoIQBti/BEST%20TEACHERS%20ICMDA?maxRecords=100&view=TEACHERS";

  constructor(private http:HttpClient) { }
  getBestTeachersData():Observable<any[]>
  {
    return this.http.get<any[]>(this.url,{headers: { 'Authorization': `Bearer keyqTM7fqRgqcPay3` }});
  }
}
