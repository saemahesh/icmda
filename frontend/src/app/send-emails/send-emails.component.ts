import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OnlineRegistrationService } from '../online-registration/online-registration.service';

@Component({
  selector: 'app-send-emails',
  templateUrl: './send-emails.component.html',
  styleUrls: ['./send-emails.component.css']
})
export class SendEmailsComponent implements OnInit {
  participantDetailsForm: FormGroup;
  submitted = false;
  
  constructor(private fb:FormBuilder,private onlineRegistration:OnlineRegistrationService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.participantDetails();
  }
  participantDetails(){
   this.participantDetailsForm = this.fb.group({
     name:['',Validators.required],
     regId:['',Validators.required],
     artForm:['',Validators.required],
     category:['',Validators.required],
     level:['',Validators.required],
     prize:['',Validators.required]
   })
  }
  get f(){
    return this.participantDetailsForm.controls;
  }
  
  submitForm(){
    this.submitted = true;
    if(this.participantDetailsForm.invalid){
      return;
    }
    const data={
      "name": this.participantDetailsForm.value.name,
      "id": this.participantDetailsForm.value.regId,
      "artForm": this.participantDetailsForm.value.artForm,
      "category": this.participantDetailsForm.value.category,
      "level": this.participantDetailsForm.value.level,
      "prize": this.participantDetailsForm.value.prize
    }
    this.onlineRegistration.sendemailsdata(data).subscribe((res:any)=>{
      if(res.data ===null){
        this.toastr.error(res.data)
      }else{
        this.toastr.success(res.data)
        this.participantDetailsForm.reset();
        this.submitted = false;
      }
    })
  }
}
