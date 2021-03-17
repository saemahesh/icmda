import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { OnlineRegistrationService } from '../online-registration/online-registration.service';
import { prizeDetails } from './prize-distribution';

@Component({
  selector: 'app-prize-distribution',
  templateUrl: './prize-distribution.component.html',
  styleUrls: ['./prize-distribution.component.css']
})
export class PrizeDistributionComponent implements OnInit {
  paymentsMode = false;
  submitted = false;
  attendence: string;
  model = new prizeDetails();
  address = false;
  constructor(private onlineRegistration: OnlineRegistrationService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.submitted = false;
  }
  getDetails() {
    this.submitted = true;
    console.log(this.model.regId)
    if (this.model.regId === undefined) {
      return;
    }
    this.onlineRegistration.getDetails(this.model.regId).subscribe((res: any) => {
      this.model.name = res['primary'][0].name
    });
  }
  changedetails(event) {
    this.address = event.target.value === 'no' ? true : false;
    // if (this.attendence === 'no') {
    //   this.address = true;
    // } else {
    //   this.address = false;
    // }
  }

  submit(prizeForm: NgForm) {
    this.submitted = true;
    if (prizeForm.invalid) {
      return;
    }
    const data = {
      'id': this.model.regId,
      'attendence': this.attendence,
      'delivery_address': this.model.deliveryaddress
    };
    this.onlineRegistration.updateEvents(data).subscribe((res: any) => {
      if (!res) {
        // this.toastr.error(res.status.message);
      } else {
        Swal.fire({
          icon: "success",
          title: `You have successfully Submitted `,
          showConfirmButton: true,
        }).then((suuess) => {

          prizeForm.reset();
          this.submitted = false;
          this.model.regId = undefined;
          this.model.attendence = undefined;
          this.model.deliveryaddress = undefined
          window.location.reload()
        });

      }
    });
  }
}
