import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide-rhythm',
  templateUrl: './guide-rhythm.component.html',
  styleUrls: ['./guide-rhythm.component.css']
})
export class GuideRhythmComponent implements OnInit {

  guidelines = [];

  constructor() { }

  ngOnInit(): void {
    this.guidelines = [
      {
        "category": "SUB JUNIOR",
        "age_limit": "5 TO 8 YEARS",
        "time_limit": "Approximate 5 Mintues",
        "items": [
          "Any Eka",
          "adhi thala sarvalagu "
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      },
      {
        "category": " SUB JUNIORS PROGRESSIVE ",
        "age_limit": "5 TO 8 YEARS",
        "time_limit": "Approximate 6 Mintues",
        "items": [
          "Roopaka",
          " khanda chapu sarvalagu with korvai"
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      },
      {
        "category": "JUNIORS",
        "age_limit": "9 TO 12 YEARS",
        "time_limit": "Approximate 6 Mintues",
        "items": [
          "Any Adhi ",
          "Roopaka sarvalagu"
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      },
      {
        "category": " JUNIORS PROGRESSIVE ",
        "age_limit": "9 TO 12 YEARS",
        "time_limit": "Approximate 8 Mintues",
        "items": [
          "Khandachaapu",
          "  Misrachapu thani avarthanam along with Mora korvai"
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      },
      {
        "category": " SENIORS ",
        "age_limit": "13 TO 16 YEARS",
        "time_limit": "Approximate 8 Mintues",
        "items": [
          "Roopaka",
          "khanda chapu sarvalagu with korvai"
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": " INTERNATIONAL LEVEL NATYA SIRONMANI TITLE "
      },
      {
        "category": " SUPER SENIORS ",
        "age_limit": "17 TO 20 YEARS",
        "time_limit": "Approximate 8 Mintues",
        "items": [
          "Adhi",
          "Roopalca,Khandachaapu",
          " Misrachapu thani avarthanam along with Mora korvai"
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold ) & CASH PRIZE",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      },
    
      {
        "category": "PRODIGY CATEGORY",
        "age_limit": "Under 15 YEARS",
        "time_limit": "Approximate 15 Mintues",
        "items": [
          " Can choose any of Senior, Super senior",
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
        "time_limit": "Approximate 15 Mintues",
        "items": [
          " Can choose any of Sub-junior , Junior, Senior, Super senior",
          "open category items. partcipants can choose bhajans."
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( Not pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      },
      {
        "category": " OPEN CATEGORY",
        "age_limit": "ABOVE 20 YEARS",
        "time_limit": "Approximate 10 Mintues",
        "items": [
            "Any Adhi",
            "Roopaaka/khandachaapu thani avarthanam along with any Korappu in between Thani & Mora korvai"
        ],
        "1st_prize": "CERTIFICATE & GOLD MEDAL ( pure gold )",
        "2nd_prize": "CERTIFICATE & SILVER MEDAL ( pure silver )",
        "3rd_prize": "CERTIFICATE & BRONZE MEDAL",
        "title": ""
      }
    ]
  }

}
