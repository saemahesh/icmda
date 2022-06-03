import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aigiri-nandini-group-registration',
  templateUrl: './aigiri-nandini-group-registration.component.html',
  styleUrls: ['./aigiri-nandini-group-registration.component.css']
})
export class AigiriNandiniGroupRegistrationComponent implements OnInit {
  loading = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  
  }

}
