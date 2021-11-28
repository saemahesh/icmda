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
        "time_limit": "Maximum 5 Min",
        "items": [
          "Any Eka",
          "adhi thala sarvalagu "
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": ""
      },
      {
        "category": " SUB JUNIORS PROGRESSIVE ",
        "age_limit": "5 TO 8 YEARS",
        "time_limit": "Maximum 6 Min",
        "items": [
          "Roopaka",
          " khanda chapu sarvalagu with korvai"
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": ""
      },
      {
        "category": "JUNIORS",
        "age_limit": "9 TO 12 YEARS",
        "time_limit": "Maximum 16 Min",
        "items": [
          "Any Adhi ",
          "Roopaka sarvalagu"
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": ""
      },
      {
        "category": " JUNIORS PROGRESSIVE ",
        "age_limit": "9 TO 12 YEARS",
        "time_limit": "Maximum 8 Min",
        "items": [
          "Khandachaapu",
          "  Misrachapu thani avarthanam along with Mora",
          "khanda chapu sarvalagu with korvai"
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": ""
      },
      {
        "category": " SENIORS ",
        "age_limit": "13 TO 16 YEARS",
        "time_limit": "Maximum 8 Min",
        "items": [
          "Adhi",
          "khandachaapu  sarvalage with korval"
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": " INTERNATIONAL LEVEL NATYA SIRONMANI TITLE & certificate. "
      },
      {
        "category": " SUPER SENIORS ",
        "age_limit": "17 TO 20 YEARS",
        "time_limit": "Maximum 8 Min",
        "items": [
          "Adhi",
          "Roopalca,Khandachaapu",
          " Misrachapu thani avarthanam along with Mora korvai"
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": ""
      },
      {
        "category": " OPEN Category ABOVE",
        "age_limit": "20 YEARS",
        "time_limit": "Maximum 10 Min",
        "items": [
          "Adhi Of Roopaaka/khandachaapu thani avarthanam along with any Korappu in between Thani & Mora korvai"
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": ""
      },
      {
        "category": "PRODIGY category",
        "age_limit": "15 YEARS",
        "time_limit": "Maximum 15 Min",
        "items": [
          " Can choose any of Senior",
          "Super senior",
          "open category items "
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": ""
      },
      {
        "category": "SPECIAL category",
        "age_limit": "no age limit",
        "time_limit": "Maximum 15 Min",
        "items": [
          " Can choose any of Sub-junior",
          "Junior, Senior, Super senior",
          "open category items. partcipants can choose bhajans."
        ]
      }
    ]
  }

}
