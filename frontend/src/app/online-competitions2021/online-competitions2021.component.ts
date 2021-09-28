import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { OnlineRegistrationService } from '../online-registration/online-registration.service';

@Component({
  selector: 'app-online-competitions2021',
  templateUrl: './online-competitions2021.component.html',
  styleUrls: ['./online-competitions2021.component.css']
})
export class OnlineCompetitions2021Component implements OnInit {
  submitted: boolean = false;
  id: any;
  email: any;
  modalType: any;
  constructor(private router: Router, private modalService: BsModalService, private onlineService: OnlineRegistrationService, private toastr: ToastrService) { }
  modalRef: BsModalRef;
  ngOnInit(): void {
  }

  goNavigate(type) {
    if (type == 'register') {
      this.router.navigate(['/online-competition-results-2021/register'])
    } else if (type == 'update') {
      this.router.navigate(['/online-competition-results-2021/update'])
    }
  }

  open(content, modalType) {
    this.modalType = modalType;
    this.id = undefined;
    this.email = undefined;
    this.submitted = false;
    this.modalRef = this.modalService.show(content);
  }

  close() {
    this.modalService.hide();
  }

  submit() {
    this.submitted = true;
    if (this.id && this.email) {
      var reqObj = {
        "id": this.id,
        "email": this.email
      }
      this.onlineService.getEventDetails(reqObj).subscribe((res: any) => {
        if (res.length == 0) {
          this.toastr.error("Registration ID or Email not Found", 'Error')
        } else if (res.length > 0) {
          this.close();
          if (this.modalType == 'updateEvent') {
            this.router.navigate(['/online-competition-results-2021/update'], { state: { data: res[0] } });
          } else if (this.modalType == 'submitVideo') {
            this.router.navigate(['/submit-video'], { state: { data: res[0] } });
            console.log('submitVideo');
          }
        }
      })
    }
  }

}
