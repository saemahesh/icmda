import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UploadWinningsService {

  constructor(private http: HttpClient) { }

  postUploadWinnings(reqObj: any) {
    return this.http.post(environment.baseUrl + '/upload-winnings', reqObj);
  }
}
