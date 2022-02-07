import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acamedy',
  templateUrl: './acamedy.component.html',
  styleUrls: ['./acamedy.component.css']
})
export class AcamedyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = 'https://rzp.io/l/icmda-academy';
  }

}
