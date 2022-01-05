import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-remindme',
  templateUrl: './remindme.component.html',
  styleUrls: ['./remindme.component.css']
})
export class RemindmeComponent implements OnInit {

  loading = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }

}
