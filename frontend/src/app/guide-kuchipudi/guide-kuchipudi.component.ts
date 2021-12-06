import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide-kuchipudi',
  templateUrl: './guide-kuchipudi.component.html',
  styleUrls: ['./guide-kuchipudi.component.css']
})
export class GuideKuchipudiComponent implements OnInit {

  guidelines = []

  constructor() { }

  ngOnInit(): void {
    this.guidelines = [
      {
        "category": "SUB JUNIORs",
        "age_limit": "5 TO 8 YEARS",
        "time_limit": "Maximum 6 Minutes",
        "items": [
          "Kowtham",
          "Brahmanjali",
          "Annamacharya keerthana",
          "any small item. "
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL  (Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL ",
        "title": ""
      },
      {
        "category": "  JUNIORS ",
        "age_limit": "9 TO 12 YEARS",
        "time_limit": "Maximum 8 Minutes",
        "items": [
          "Jathiswaram",
          "Any keerthana",
          "Any sabdham"
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL  ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL ",
        "title": ""
      },
      {
        "category": "SENIORS",
        "age_limit": "13 TO 16 YEARS",
        "time_limit": "Maximum 10 Minutes",
        "items": [
          " Tarangam",
          "Sivashtakam",
          "Any Sabdham"
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL  ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL ",
        "title": ""
      },
      {
        "category": " SUPER SENIORS",
        "age_limit": "17 TO 20 YEARS",
        "time_limit": "Maximum 12 Minutes",
        "items": [
          "Daruvu",
          " Kshethrayya padam",
          "Jaavali",
          "Ashtapadi",
          " Ananda thandavam"
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL  ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL ",
        "title": ""
      },
      {
        "category": "OPEN CATEGORY",
        "age_limit": "ABOVE 20 YEARS",
        "time_limit": "minimum 7 Minutes , Maximum 15 Minutes",
        "items": [
          "any kuchipudi dance item",
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL  ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL ",
        "title": " INTERNATIONAL LEVEL NATYA SIRONMANI TITLE & certificate. "
      },
      {
        "category": " PRODIGY CATEGORY",
        "age_limit": "Under 15 YEARS",
        "time_limit": "Maximum 15 Minutes",
        "items": [
          "  Bhagavta",
          "Mahabharata",
          "Ramayan etc., (any Mythological epics)",
        //  " Should represent 'Abhinayam' correlated to 'Dramatization' with associated 'background music'"
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL  ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL ",
        "title": ""
      },
      {
        "category": "SPECIAL CATEGORY",
        "age_limit": "no age limit",
        "time_limit": "Maximum 15 Minutes",
        "items": [
          "any of Sub-junior, Junior, Senior, Super senior or open category items "
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL  ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL ",
        "title": ""
      }
    ]
  }

}
