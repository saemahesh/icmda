import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mahishasura-mardini',
  templateUrl: './mahishasura-mardini.component.html',
  styleUrls: ['./mahishasura-mardini.component.css']
})
export class MahishasuraMardiniComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  
  isMobile() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width < 768;
  }

}
