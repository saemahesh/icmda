import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide-instrument',
  templateUrl: './guide-instrument.component.html',
  styleUrls: ['./guide-instrument.component.css']
})
export class GuideInstrumentComponent implements OnInit {

  guidelines = []

  constructor() { }

  ngOnInit(): void {
    this.guidelines = [
      {
        "category": "SUB JUNIOR",
        "age_limit": "5 TO 8 YEARS",
        "time_limit": "Approximate 3 Minutes",
        "items": [
          "Nottu Swara",
          "Shlokam",
          "Geetham"
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      },
      {
        "category": " SUB JUNIORS PROGREESIVE",
        "age_limit": "5 TO 8 YEARS",
        "time_limit": "Approximate 6 Minutes",
        "items": [
          "Varnam",
          "Krithi"
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      },
      {
        "category": "JUNIORS",
        "age_limit": "9 TO 12 YEARS",
        "time_limit": "Approximate 4 Minutes",
        "items": [
          "Any Geetham",
          "Swarajathi",
          "Jathiswaram"
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL (Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      },
      {
        "category": "JUNIORS PROGRESIVE",
        "age_limit": "9 TO 12 YEARS",
        "time_limit": "Approximate 15 Minutes",
        "items": [
          "Varnam in 2 speeds",
          "Krithi",
          "Devarnama"
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      },
      {
        "category": "SENIORS",
        "age_limit": "13 TO 16 YEARS",
        "time_limit": "Approximate 8 Minutes",
        "items": [
          "Varnam in 2 speeds",
          "Krithi",
          "Devarnama"
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": " INTERNATIONAL LEVEL NATYA SIRONMANI TITLE "
      },
      {
        "category": "SUPER SENIORS",
        "age_limit": "17 TO 20 YEARS",
        "time_limit": "Approximate 15 Minutes",
        "items": [
          "Krithi with Devwith Manodharma Raga ,Neraval, Kalpanaswara and Thillan","any Devotional Songs"
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold ) & CASH PRIZE",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      },
      {
        "category": "PRODIGY CATEGORY",
        "age_limit": "Under 15 YEARS",
        "time_limit": "Approximate 15 Minutes",
        "items": [
          " Can choose any of Senior , Super senior",
          "open category items "
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      },
      {
        "category": "SPECIAL CATEGORY",
        "age_limit": "no age limit",
        "time_limit": "Approximate 15 Minutes",
        "items": [
          " Can choose any of Sub-junior,Junior, Senior, Super senior",
          "open category items. partcipants can choose bhajans."
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      },
      {
        "category": "OPEN CATEGORY",
        "age_limit": "ABOVE 20 YEARS",
        "time_limit": "Approximate 40 Minutes",
        "items": [
          " Ata tala varnam with ragam {must} & (Kirti with raga alapana, neraval, Kalpana swaras and Pancharathna keerthana",
          " Ragam,Thanam, Pallavi (RTP) "
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      }
    ]
  }

}
