import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OnlineRegistrationService } from '../online-registration/online-registration.service';
declare var $:any;
@Component({
  selector: 'app-send-emails-form',
  templateUrl: './send-emails-form.component.html',
  styleUrls: ['./send-emails-form.component.css']
})
export class SendEmailsFormComponent implements OnInit {
  paymentCodeForm: FormGroup;
  paymentsMode = false;
  submitted = false;
  model: any = {};
  paymentCodes:string;
  constructor(private fb:FormBuilder,private onlineRegistration:OnlineRegistrationService,private toastr:ToastrService) { }
  
  ngOnInit(): void {
    $('#code').modal({
      show: true,
      backdrop: 'static'
    });
    
  }
  submitCode(){
    this.submitted = true;
    console.log(this.paymentCodes)
    if(this.paymentCodes === 'icmda$1')  {
      console.log(this.paymentCodes,"code")
      this.participantDetails()
      this.paymentsMode = true;
      
     
    } else{
      return $('#code').modal({
        show: true,
        backdrop: 'static'
      })
    }
    console.log(this.paymentCodes,"pcode")
    
  }
  participantDetails(){
    this.submitted = false;
   this.paymentCodeForm = this.fb.group({
    transactionId:['',Validators.required],
    paymentMode:['',Validators.required],
    paymentDate:['',Validators.required],
    name:['',Validators.required],
    phoneNumber:['',Validators.required],
    occupied:['',Validators.required],
    paymentCode:['',Validators.required],
    amount:['',Validators.required]
   })
  }
  get f(){
    return this.paymentCodeForm.controls;
  }
  
  submitForm(){
    this.submitted = true;
    if(this.paymentCodeForm.invalid){
      return;
    }
    const data={
      "paymentMode": this.paymentCodeForm.value.paymentMode,
      "id": this.paymentCodeForm.value.transactionId,
      "paymentDate": this.paymentCodeForm.value.paymentDate,
      "name": this.paymentCodeForm.value.name,
      "phoneNumber": this.paymentCodeForm.value.phoneNumber,
      "occupied": this.paymentCodeForm.value.occupied,
      "paymentCode": this.paymentCodeForm.value.paymentCode,
      "amount":this.paymentCodeForm.value.amount
    }
    // this.onlineRegistration.sendemailsdata(data).subscribe((res:any)=>{
    //   if(res.data ===null){
    //     this.toastr.error(res.err)
    //   }else{
    //     this.toastr.success(res.data)
    //     // this.participantDetailsForm.reset();
    //     this.participantDetailsForm.value.name= ''
    //     console.log(this.participantDetailsForm.value.name,"nameeeee")
    //     this.participantDetailsForm.value.id= ''
    //     this.submitted = false;
    //   }
    // })
  }

}
// export interface Payment{
//   paymentCodes: any;
// }