import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide-bharat',
  templateUrl: './guide-bharat.component.html',
  styleUrls: ['./guide-bharat.component.css']
})
export class GuideBharatComponent implements OnInit {

  guidelines = []

  constructor() { }

  ngOnInit(): void {

    this.guidelines = [
        {
          "category": "SUB JUNIOR",
          "age_limit": "5 TO 8 YEARS",
          "time_limit": "Maximum 4 Minutes",
          "items": [
            "Invocation item",
            "Slokas",
            "Alarippu",
            "Pushpanjali"
          ],
          "1st_prize": "GOLD MEDAL ( Not pure gold )",
          "2nd_prize": "SILVER MEDAL ( not pure silver )",
          "3rd_prize": "BRONZE MEDAL",
          "title": ""
        },
        {
          "category": " JUNIORS",
          "age_limit": "9 TO 12 YEARS",
          "time_limit": "Maximum 6 Minutes",
          "items": [
            "Invocation item",
            "MALLARI",
            "JATHISWARAM"
          ],
          "1st_prize": "GOLD MEDAL ( Not pure gold )",
          "2nd_prize": "SILVER MEDAL ( not pure silver )",
          "3rd_prize": "BRONZE MEDAL",
          "title": ""
        },
        {
          "category": "SENIORS",
          "age_limit": "13 TO 16 YEARS",
          "time_limit": "Maximum 8 Minutes",
          "items": [
            "Invocation iteam",
            "padam",
            "THILLANA"
          ],
          "1st_prize": "GOLD MEDAL ( Not pure gold )",
          "2nd_prize": "SILVER MEDAL ( not pure silver )",
          "3rd_prize": "BRONZE MEDAL",
          "title": ""
        },
        {
          "category": "SUPER SENIORS",
          "age_limit": "17 TO 20 YEARS",
          "time_limit": "Maximum 12 Minutes",
          "items": [
            "Thyagaraja keerthana",
            "Jaavali"
          ],
          "1st_prize": "GOLD MEDAL ( Not pure gold )",
          "2nd_prize": "SILVER MEDAL ( not pure silver )",
          "3rd_prize": "BRONZE MEDAL",
          "title": ""
        },
        {
          "category": "OPEN CATEGORY",
          "age_limit": "20 YEARS ABOVE",
          "time_limit": "Maximum 45 Minutes",
          "items": [
            "Varnam",
            "Ashtapadhi,padham,Thillana",
            "Jaavali,Thillana",
            "Pushpanjali"
          ],
          "1st_prize": "GOLD MEDAL ( Pure gold )",
          "2nd_prize": "SILVER MEDAL ( not pure silver )",
          "3rd_prize": "BRONZE MEDAL",
          "title": " INTERNATIONAL LEVEL NATYA SIRONMANI TITLE & certificate. "
        },
        {
          "category": "PRODIGY",
          "age_limit": "BELOW 15 YEARS",
          "time_limit": "Maximum 30 Minutes",
          "items": [
            "Invocation item",
            "Compositionon on lord siva exbit",
            "AbhinayaM from navarasas with story line"
          ],
          "1st_prize": "GOLD MEDAL ( Not pure gold )",
          "2nd_prize": "SILVER MEDAL ( not pure silver )",
          "3rd_prize": "BRONZE MEDAL",
          "title": ""
        },
        {
          "category": "SPECIAL",
          "age_limit": "NO AGE LIMIT",
          "time_limit": "Maximum 20 Minutes",
          "items": [
            "PADHAM",
            "Jaavali",
            "Bhajan",
            "Asstapathi",
            "Abhang"
          ],
          "1st_prize": "GOLD MEDAL ( Not pure gold )",
          "2nd_prize": "SILVER MEDAL ( Not pure silver )",
          "3rd_prize": "BRONZE MEDAL",
          "title": ""
        }
      ]
  }

}