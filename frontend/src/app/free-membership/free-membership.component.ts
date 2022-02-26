import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-membership',
  templateUrl: './free-membership.component.html',
  styleUrls: ['./free-membership.component.css']
})
export class FreeMembershipComponent implements OnInit {

  loading = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  
  }
}
