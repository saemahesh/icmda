import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdcardService } from './idcard.service';

@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IdcardComponent implements OnInit {
  profileId: any;
  profileDetails; 
  constructor(private activatedRoute : ActivatedRoute, private idcardService : IdcardService ) { }

  ngOnInit() {
  this.activatedRoute.paramMap.subscribe(params => {
    this.profileId = params.get('id');
    this.getProfileDetails(this.profileId);
  })
  }
  
  getProfileDetails(profileId: any)
  {
    this.idcardService.getProfile(profileId).subscribe(res => {
      console.log('res', res);
      this.profileDetails = res[0];
    },
    err => {
      console.log('err', err);
    }
    );
  }

  
}
