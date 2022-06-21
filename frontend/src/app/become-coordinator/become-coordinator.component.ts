import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-become-coordinator',
  templateUrl: './become-coordinator.component.html',
  styleUrls: ['./become-coordinator.component.css']
})
export class BecomeCoordinatorComponent implements OnInit {
  loading = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  
  }


}
