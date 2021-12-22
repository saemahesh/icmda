import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icmda-csc',
  templateUrl: './icmda-csc.component.html',
  styleUrls: ['./icmda-csc.component.css']
})
export class IcmdaCscComponent implements OnInit {

  loading=true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }


}
