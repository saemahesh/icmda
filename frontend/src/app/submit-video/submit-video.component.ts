import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventRegisterService } from '../event-register/event-register.service';

@Component({
  selector: 'app-submit-video',
  templateUrl: './submit-video.component.html',
  styleUrls: ['./submit-video.component.css']
})
export class SubmitVideoComponent implements OnInit {
  link: any;
  submitted: boolean = false;
  userData: any;
  constructor(private router: Router, private eventService: EventRegisterService, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (history.state.data) {
      this.userData = history.state.data
    } else {
      this.router.navigate(['/online-competition-results-2021']);
    }
  }

  submit() {
    this.submitted = true;
    if (this.link) {
      var reqObj = {
        "id": this.userData.id,
        "email": this.userData.email,
        "videoLink": this.link
      }
      console.log(reqObj);
      this.eventService.putSubmitVideo(reqObj).subscribe((res: any) => {
        if (res.status == 'Successfully Uploaded') {
          this.toastr.success(res.status)
          this.router.navigate(['/online-competition-results-2021']);
        } else {
          this.toastr.error(res.status);
        }
      })
    }
  }
}
