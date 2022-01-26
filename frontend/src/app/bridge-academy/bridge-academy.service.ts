import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BridgeAcademyService {
  public syllabusUrl: any;
  constructor(public http : HttpClient) { }

  getSyllabus(artform:any){
    this.syllabusUrl=`https://api.airtable.com/v0/appssuewDKeeJOhvR/${artform}`;
    return this.http.get<any[]>(this.syllabusUrl, { headers: { 'Authorization': `Bearer keyqTM7fqRgqcPay3` } });
  }

}
