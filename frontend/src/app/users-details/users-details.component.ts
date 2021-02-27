import { Component, OnInit } from '@angular/core';
import { UsersDetailsService } from "./users-details.service";
interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];
@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  countries = COUNTRIES;

  userdetails:any;

  constructor(public userservice:UsersDetailsService) { }

  ngOnInit(): void {
    this.getData()
  }
getData(){
  this.userservice.getRegistrationProfiles().subscribe((res)=>{
    this.userdetails =res;
      console.log("ff",res)
  },
  err=>{
    console.log("err",err)
  })
  
}
}
