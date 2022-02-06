import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affliate',
  templateUrl: './affliate.component.html',
  styleUrls: ['./affliate.component.css']
})
export class AffliateComponent implements OnInit {


  loading = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  
  }

}
