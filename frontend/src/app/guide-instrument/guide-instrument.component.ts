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
        "time_limit": "Maximum 3 Min",
        "items": [
          "Nottu Swara",
          "Shlokam",
          "Geetham"
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": ""
      },
      {
        "category": " SUB JUNIORS PROGREESIVE",
        "age_limit": "5 TO 8 YEARS",
        "time_limit": "Maximum 6 Min",
        "items": [
          "Varnam",
          "Krithi"
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": ""
      },
      {
        "category": "JUNIORS",
        "age_limit": "9 TO 12 YEARS",
        "time_limit": "Maximum 4 Min",
        "items": [
          "Any Geetham",
          "Swarajathi",
          "Jathiswaram"
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": ""
      },
      {
        "category": "JUNIORS progressive",
        "age_limit": "9 TO 12 YEARS",
        "time_limit": "Maximum 15 Min",
        "items": [
          "Varnam in 2 speeds",
          "Krithi",
          "Devarnama"
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": ""
      },
      {
        "category": "SENIORS",
        "age_limit": "13 TO 16 YEARS",
        "time_limit": "Maximum 8 Min",
        "items": [
          "Varnam in 2 speeds",
          "Krithi",
          "Devarnama"
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": " INTERNATIONAL LEVEL NATYA SIRONMANI TITLE & certificate. "
      },
      {
        "category": "SUPER SENIORS",
        "age_limit": "17 TO 20 YEARS",
        "time_limit": "Maximum 15 Min",
        "items": [
          "Krithi",
          " Devwith Manodharma Raga",
          "Neraval, Kalpanaswara and Thillana",
          "any Devotional Songs"
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": ""
      },
      {
        "category": "OPEN CATEGORY ABOVE",
        "age_limit": "20 YEARS",
        "time_limit": "Maximum 15 Min",
        "items": [
          " Ata tala varnam with ragam",
          "raga alapana, neraval, Kalpana swaras and Pancharathna keerthana",
          " Ragam,Thanam, Pallavi "
        ],
        "1st_prize": "GOLD MEDAL ( Not pure gold )",
        "2nd_prize": "SILVER MEDAL ( not pure silver )",
        "3rd_prize": "BRONZE MEDAL",
        "title": ""
      },
      {
        "category": "PRODIGY category",
        "age_limit": "15 YEARS",
        "time_limit": "Maximum 40 Min",
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
