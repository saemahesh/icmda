import { Component, OnInit } from '@angular/core';
import { WhatsappLinkService } from './whatsapp.service';


@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsappComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = 'https://chat.whatsapp.com/HjfAUOyC5cGFl3mMt0phhq';
  }

}
