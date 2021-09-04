import { OnlineRegistrationService } from "./online-registration.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import Swal from "sweetalert2";

@Component({
  selector: 'app-online-registration',
  templateUrl: './online-registration.component.html',
  styleUrls: ['./online-registration.component.css']
})
export class OnlineRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;
  slotTypevalue;
  slotName;
  slotTimesValue: any = []
  amount: any;
  typeId;
  slotTypes: any = []
  constructor(private fb: FormBuilder, private onlineRegistration: OnlineRegistrationService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.registration();
    this.onlineRegistration.getSlotTypes().subscribe((res: any) => {
      this.slotTypes = res['primary']
      console.log(res, "respppppppppppppp")
    })
  }
  registration() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      slotType: ['', Validators.required],
      slotTime: ['', Validators.required],
      code: ['', Validators.required],
      country: ['', Validators.required]
    })
  }
  get f() {
    return this.registrationForm.controls;
  }
  slotType(event) {
    this.typeId = null;
    this.registrationForm.controls.slotTime.setValue('')
    this.slotTypevalue = event.target.value;
    let priceMapping = {
      'GROUP DANCE': 3000,
      'SOLO MUSIC': 1000,
      'SOLO DANCE': 1000,
      'DUET': 2000,
      'DONOR': 'Contact Us'
    }
    this.amount = priceMapping[this.slotTypevalue]
    console.log(this.slotTypevalue, "valueeee")
    this.onlineRegistration.getSlotType(this.slotTypevalue).subscribe((res: any) => {
      console.log(res['primary'])
      this.slotTimesValue = res['primary']
    })
  }

  slotID(event) {
    this.slotName = event.target.value;
    console.log(this.slotName, "hsff")
    // this.slotTimesValue.filter((element) => {
    //   if (this.slotName === element.slot_time) {
    //     this.typeId = element.id;
    //     console.log(this.typeId, "iddddd")
    //   } else {

    //   }
    // })
  }
  submitForm() {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
    const data = {
      "name": this.registrationForm.value.name,
      "email": this.registrationForm.value.email,
      "phone_number": this.registrationForm.value.phoneNumber,
      "country": this.registrationForm.value.country,
      "slot_id": this.slotName,
      "slot_type": this.slotTypevalue.split("-")[0],
      "code": this.registrationForm.value.code
    }
    this.onlineRegistration.getOnlineEvent(data).subscribe((res: any) => {
      if (res.status.code === 'ERROR') {
        this.toastr.error(res.status.message)
      } else {
        Swal.fire({
          icon: "success",
          title:
            "You have successfully registered in this event.Please check your email for detailed information",
          showConfirmButton: true,
        }).then((suuess) => {
          this.registrationForm.reset();
          this.submitted = false;
        });
        // this.toastr.success(res.status.message)

      }
    })
  }
}
