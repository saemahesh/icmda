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
  slotId
  slotTimesValue:any=[]
  amount:any;
  typeId;
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
    this.slotId = ''
    console.log(event.target.value,"event")
    this.slotTypevalue = event.target.value;
    let type=this.slotTypevalue.split("-")
    console.log(type)
    this.amount =type[1]
    console.log(this.slotTypevalue,"valueeee")
    this.onlineRegistration.getSlotType(type[0]).subscribe((res:any)=>{
      console.log(res['primary'])
      this.slotTimesValue=res['primary']
    })
  }
  
  slotID(event){
    console.log(event.target.value,"event")
    this.slotId = event.target.value;
    this.slotTimesValue.filter((element)=>{
      if(this.slotId === element.slot_time) {
        this.typeId = element.id;
      }
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
      "phone_number": this.registrationForm.value.phoneNumber,
      "country": this.registrationForm.value.country,
      "slot_id": this.typeId,
      "slot_type": this.slotTypevalue.split("-")[0],
      "code": this.registrationForm.value.code
    }
    this.onlineRegistration.getOnlineEvent(data).subscribe((res:any)=>{
      if(res.status.code==='ERROR'){
        this.toastr.error(res.status.message)
      }else{
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
