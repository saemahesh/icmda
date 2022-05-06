import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ResultsService } from './results-page.service';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  userDetails;
  selectedCategory = "";
  track;
  email;
  elements: any;
  emailData: any;
  loading = false;
  finalEmail;
  userGuinnessDetails;
  userSeason2Details;
  Date: any;
  userFusionDetails: any;
  dataLoad;
  emailmessage;
  categorymsg;


  constructor(private userData: ResultsService) { }

  ngOnInit(): void {

  }

  trackData(email, selectedCategory, track) {
    this.emailmessage = '';
    this.categorymsg = '';
    if (!email || email == '') {
      this.emailmessage = "Enter your email!";
    }
    if (!selectedCategory || selectedCategory == '') {
      this.categorymsg = "plaese choose category"
    }
    this.finalEmail = email.toLowerCase().trim();
    this.userSeason2Details = [];
    this.userGuinnessDetails = [];
    this.userFusionDetails = [];
    this.loading = false;
    this.dataLoad = true;

    if (selectedCategory == "SEASON 2 ONLINE COMPETITIONS FOR MUSIC & DANCE") {

      this.userData.getSeason2Data(this.finalEmail, track).subscribe((data: any) => {
        this.userSeason2Details = data.records;
        this.userSeason2Details = []
        data.records.forEach((item)=>{
          if(item.fields.photo_link && item.fields.photo_link.length > 0){
            item.fields.photo_link[0] = item.fields.photo_link[0].replace('open','uc');            
            item.fields.video_link[0] = `https://drive.google.com/file/d/video_link/preview`.replace('video_link', item.fields.video_link[0].split('=')[1]);
          }
          this.userSeason2Details.push(item);
        });
        this.loading = true;
        this.dataLoad = false;
      });
    }


    else if (selectedCategory == "GUINNESS WORLD RECORD CERTIFICATES") {
      this.userData.getGuinnessData(this.finalEmail, track).subscribe((data: any) => {
        this.userGuinnessDetails = data.records;
        this.loading = true;
        this.dataLoad = false;

      });
    }
    else if (selectedCategory == "FUSION COMPETITIONS FOR MUSIC & DANCE") {
      this.userData.getFusionData(this.finalEmail, track).subscribe((data: any) => {
        this.userFusionDetails = []
        data.records.forEach((item)=>{
          if(item.fields.photo_link && item.fields.photo_link.length > 0){
            item.fields.photo_link[0] = item.fields.photo_link[0].replace('open','uc');            
            item.fields.video_link[0] = `https://drive.google.com/file/d/video_link/preview`.replace('video_link', item.fields.video_link[0].split('=')[1]);
          }
          this.userFusionDetails.push(item);
        });
        this.loading = true;
        this.dataLoad = false;
      });
    }

    // this.email=null;
    // this.selectedCategory="";

  }

  // dispatchedDate(paymentDate){
  //   return paymentDate.format('DD-MM-YYYY')
  //    return  moment(paymentDate.format('DD-MM-YYYY')).add(14, 'd').format('DD-MM-YYYY');
  //  }
 
}