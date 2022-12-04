import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-official-attempt',
  templateUrl: './official-attempt.component.html',
  styleUrls: ['./official-attempt.component.css']
})
export class OfficialAttemptComponent implements OnInit {

  loading = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  
  }
}
