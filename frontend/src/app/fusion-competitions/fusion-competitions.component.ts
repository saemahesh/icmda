import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fusion-competitions',
  templateUrl: './fusion-competitions.component.html',
  styleUrls: ['./fusion-competitions.component.css']
})
export class FusionCompetitionsComponent implements OnInit {

  guidelines = []

  constructor() { }

  ngOnInit(): void {
    this.guidelines = []
  }

}
