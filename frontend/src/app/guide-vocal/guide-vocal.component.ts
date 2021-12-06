import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide-vocal',
  templateUrl: './guide-vocal.component.html',
  styleUrls: ['./guide-vocal.component.css']
})
export class GuideVocalComponent implements OnInit {

  guidelines = [] 

  constructor() { }

  ngOnInit(): void {
    this.guidelines = [
      {
        "category": "SUB JUNIORS",
        "age_limit": "5 TO 8 YEARS",
        "time_limit": "Maximum 3 Mintues",
        "items":  [
          "Nottu Swara",
          "Shlokam",
          " Geetham"
          ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      },
      {
        "category": " SUB JUNIORS PROGRESSIVE ",
        "age_limit": "5 TO 8 YEARS",
        "time_limit": "Maximum 6 Mintues",
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
        "time_limit": "Maximum 4 Mintues",
        "items":[
          "Any Geetham",
          "Swarajathi ",
          "Jathiswaram"
          ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      },
      {
        "category": " JUNIORS PROGRESSIVE ",
        "age_limit": "9 TO 12 YEARS",
        "time_limit": "Maximum 15 Mintues",
        "items": [
          "Varnam in 2 speeds",
          " Krithi",
          "Devarnama"
          ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      },
      {
        "category": " SENIORS ",
        "age_limit": "13 TO 16 YEARS",
        "time_limit": "Maximum 8 Mintues",
        "items": [
           "Varnam in 2 speeds",
          "Krithi",
          " Devarnama "
           ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": " INTERNATIONAL LEVEL NATYA SIRONMANI TITLE & certificate. "
      },
      {
        "category": " SUPER SENIORS ",
        "age_limit": "17 TO 20 YEARS",
        "time_limit": "Maximum 15 Mintues",
        "items": [
          "Krithi with Manodharma Raga,Neraval,skalpanaswara and Thillana",
          "any Devotional Songs"
     ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      },
      {
        "category": " OPEN CATEGORY",
        "age_limit": "ABOVE20 YEARS",
        "time_limit": "Maximum 40 Mintues",
        "items": [
          "Ata tala varnam with ragam {must) & kirti with raga alapana, neraval, Kalpana swaras and Pancharathna keerthana Ragam,Thanam, Pallavi { RTP)"
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      },
      {
        "category": "PRODIGY CATEGORY",
        "age_limit": "Under 15 YEARS",
        "time_limit": "Maximum 15 Mintues",
        "items": [
          " Can choose any of Senior,Super senior",
          "open category items "
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      },
      {
        "category":"SPECIAL CATEGORY",
        "age_limit": "no age limit",
        "time_limit": "Maximum 15 Mintues",
        "items": [
          " Can choose any of Sub-junior,Junior, Senior, Super senior",
          "open category items. partcipants can choose bhajan."
          ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      }]
  }

}
