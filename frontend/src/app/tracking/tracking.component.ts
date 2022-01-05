import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TrackingService } from './tracking.service';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

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


  constructor(private userData: TrackingService) { }

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
        this.userFusionDetails = data.records;
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
