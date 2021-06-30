import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-competitions2021',
  templateUrl: './online-competitions2021.component.html',
  styleUrls: ['./online-competitions2021.component.css']
})
export class OnlineCompetitions2021Component implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goNavigate(type){
    if(type == 'register'){
      this.router.navigate(['/online-competition-results-2021/register'])
    } else if( type == 'update'){
      this.router.navigate(['/online-competition-results-2021/update'])
    }
  }

}
