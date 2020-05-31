import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  dashboardList: any;

  constructor(private dashboardService : DashboardService) { }

  ngOnInit() {
    this.dashboardService.getArtistProfiles.subscribe(result => {
      console.log("all_date", result.length)
      this.dashboardList = result;
    })
  }
}
