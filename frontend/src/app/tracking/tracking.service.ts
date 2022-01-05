import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  
  season2ApiUrl;
  guinnessApiUrl;
  fusionApiUrl;
 
   constructor(private http:HttpClient) { }

  getSeason2Data(final_email,track):Observable<any[]>
  {
   this.season2ApiUrl=`https://api.airtable.com/v0/appEORxIoUnp74THT/REGISTRATIONS?
filterByFormula=${track=='participantEmail'?'final_email':'final_teacher_email'}="${final_email}"&view=ALL DATA`;

   return this.http.get<any[]>(this.season2ApiUrl, { headers: { 'Authorization': `Bearer keyqTM7fqRgqcPay3` } });
}
  getFusionData(final_email,track):Observable<any[]>
  {
    this.fusionApiUrl=`https://api.airtable.com/v0/appHoOiF6I0v88Baa/FUSION?filterByFormula=final_email="${final_email}"&view=ALL DATA`;

    return this.http.get<any[]>(this.fusionApiUrl, { headers: { 'Authorization': `Bearer keyqTM7fqRgqcPay3` } });
  }

  getGuinnessData(final_email,track):Observable<any[]>
  {
    this.guinnessApiUrl=`https://api.airtable.com/v0/appwAyiRiFExwCInd/RAZORPAY%2015%20NOV?filterByFormula=final_email="${final_email}"`;

    return this.http.get<any[]>(this.guinnessApiUrl, { headers: { 'Authorization': `Bearer keyqTM7fqRgqcPay3` } });
  }

}
