import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private homePageGallery="https://api.airtable.com/v0/appQCvXW9YDOv547d/Table%201?maxRecords=1000&view=Grid%20view";

  constructor(private http:HttpClient) { }

  getGallery(): Observable<any[]> {
    return this.http.get<any[]>(this.homePageGallery, { headers: { 'Authorization': `Bearer keyqTM7fqRgqcPay3` } });
  }

}
