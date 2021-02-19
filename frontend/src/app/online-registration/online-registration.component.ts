import { OnlineRegistrationService } from "./online-registration.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-registration',
  templateUrl: './online-registration.component.html',
  styleUrls: ['./online-registration.component.css']
})
export class OnlineRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;
  slotTypevalue;
  constructor(private fb:FormBuilder,private onlineRegistration:OnlineRegistrationService) { }

  ngOnInit(): void {
    this.registration();
  }
  registration(){
   this.registrationForm = this.fb.group({
     name:['',Validators.required],
     email:['',Validators.required],
     phoneNumber:['',Validators.required],
     slotType:['',Validators.required],
     slotTime:['',Validators.required],
     code:['',Validators.required],
     country:['',Validators.required]
   })
  }
  get f(){
    return this.registrationForm.controls;
  }
  slotType(event){
    console.log(event.target.value,"event")
    this.slotTypevalue = event.target.value;
    // const data={
    //   'slotType': this.slotTypevalue
    // }
    this.onlineRegistration.getSlotType(this.slotTypevalue).subscribe((res:any)=>{
      console.log(res)
    })
  }
  submitForm(){
    this.submitted = true;
    if(this.registrationForm.invalid){
      return;
    }
    const data={
      "name": this.registrationForm.value.name,
      "email": this.registrationForm.value.email,
      "phoneNumber": this.registrationForm.value.phoneNumber,
      "country": this.registrationForm.value.country,
      "slotType": this.registrationForm.value.slotType,
      "slotTime": this.registrationForm.value.slotTime,
      "code": this.registrationForm.value.code
    }
    this.onlineRegistration.getOnlineEvent(data).subscribe((res:any)=>{
      this.registrationForm.reset();
    })
  }
}
