import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsappComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = 'https://chat.whatsapp.com/Efh7eo2WwV3CZIoBWLaHXg';
  }

}
