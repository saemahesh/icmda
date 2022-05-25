import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhatsappLinkService {

  
  private url = "https://api.airtable.com/v0/appY6Ni0HEvXIrp8x/PAST%20EVENTS";

  constructor(private http: HttpClient) { }
  getWhatsappLink(): Observable<any[]> {
    return this.http.get<any[]>(this.url, { headers: { 'Authorization': `Bearer keyqTM7fqRgqcPay3` } });
  }

}
