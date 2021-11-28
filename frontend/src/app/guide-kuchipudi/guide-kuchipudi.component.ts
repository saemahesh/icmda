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
        "category": "SUB JUNIOR",
        "age_limit": "5 TO 8 YEARS",
        "time_limit": "Maximum 6 Min",
        "items": [
          "Kowtham,",
          "Kowtham,",
          "Annamacharya keerthana",
          "any small item. "
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": ""
      },
      {
        "category": "  JUNIORS ",
        "age_limit": "9 TO 12 YEARS",
        "time_limit": "Maximum 8 Min",
        "items": [
          "Jathiswaram",
          "Any keerthana",
          "Any sabdham"
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": ""
      },
      {
        "category": "SENIORS",
        "age_limit": "13 TO 16 YEARS",
        "time_limit": "Maximum 10 Min",
        "items": [
          " Tarangam",
          "Sivashtakam",
          "Any Sabdham"
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": ""
      },
      {
        "category": " SUPER SENIORS",
        "age_limit": "17 TO 20 YEARS",
        "time_limit": "Maximum 12 Min",
        "items": [
          "Daruvu",
          " Kshethrayya padam",
          "Jaavali",
          "Ashtapadi",
          " Ananda thandavam"
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": ""
      },
      {
        "category": "OPEN CATEGORY ABOVE",
        "age_limit": "20 YEARS",
        "time_limit": "Maximum 7 Min",
        "items": [
          "any kuchipudi dance item",
          "GOLD MEDAL CATEGORY"
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": " INTERNATIONAL LEVEL NATYA SIRONMANI TITLE & certificate. "
      },
      {
        "category": " PRODIGY Category under",
        "age_limit": "15 YEARS",
        "time_limit": "Maximum 15 Min",
        "items": [
          "Krithi",
          "  Bhagavta",
          "Mahabharata",
          "Ramayan"
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": ""
      },
      {
        "category": ". SPECIAL Category",
        "age_limit": "no age limit",
        "time_limit": "Maximum 15 Min",
        "items": [
          "any of Sub-junior, Junior, Senior, Super senior or open category items "
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": ""
      }
    ]
  }

}
