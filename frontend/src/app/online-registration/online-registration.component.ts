import { OnlineRegistrationService } from "./online-registration.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-online-registration',
  templateUrl: './online-registration.component.html',
  styleUrls: ['./online-registration.component.css']
})
export class OnlineRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;
  slotTypevalue;
  slotId
  slotTimesValue:any=[]
  constructor(private fb:FormBuilder,private onlineRegistration:OnlineRegistrationService,private toastr:ToastrService) { }

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
    console.log(this.slotTypevalue,"valueeee")
    this.onlineRegistration.getSlotType(this.slotTypevalue).subscribe((res:any)=>{
      console.log(res['primary'])
      this.slotTimesValue=res['primary']
    })
  }
  slotID(event){
    console.log(event.target.value,"event")
    this.slotId = event.target.value
  }
  submitForm(){
    this.submitted = true;
    if(this.registrationForm.invalid){
      return;
    }
    const data={
      "name": this.registrationForm.value.name,
      "email": this.registrationForm.value.email,
      "phone_number": this.registrationForm.value.phoneNumber,
      "country": this.registrationForm.value.country,
      "slot_id": this.slotId,
      "code": this.registrationForm.value.code
    }
    this.onlineRegistration.getOnlineEvent(data).subscribe((res:any)=>{
      if(res.status.code==='ERROR'){
        this.toastr.error(res.status.message)
      }else{
        this.toastr.success(res.status.message)
        this.registrationForm.reset();
        this.submitted = false;
      }
    })
  }
}
