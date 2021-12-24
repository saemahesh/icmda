import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TearchersDataService } from './tearchers-data.service';

@Component({
  selector: 'app-tearchers-data',
  templateUrl: './tearchers-data.component.html',
  styleUrls: ['./tearchers-data.component.css']
})
export class TearchersDataComponent implements OnInit {

  profileData;
  currentUrl;
  username;
  userData: any;
  constructor(private teacherData:TearchersDataService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.username=this.route.snapshot.params.username;
    console.log(this.username);
    this.teacherData.getTeacherProfile().subscribe((data: any) => {
         this.profileData=data.records;
         console.log(this.profileData);
        // console.log(this.profileData[0].fields['CERTIFICATE NAME']);
         this.profileData.forEach((profiledata: any) => {
          console.log(profiledata.fields.Name);
           if(profiledata.fields.Name.trim()==this.username.trim())
           {
             this.userData=profiledata;
             console.log(this.userData);
           }
          });
  });

  
}

}
