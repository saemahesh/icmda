import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { OnlineRegistrationService } from '../online-registration/online-registration.service';
declare var $:any;
@Component({
  selector: 'app-send-emails-form',
  templateUrl: './send-emails-form.component.html',
  styleUrls: ['./send-emails-form.component.css']
})
export class SendEmailsFormComponent implements OnInit {
  paymentCodeForm: FormGroup;
  paymentCodeForm1: FormGroup;
  paymentsMode = false;
  submitted = false;
  submitted1 = false;
  paymentCodes:string;
  slotTypeValue;
  modeltoggle = true;
  generateNumber;
  constructor(private fb:FormBuilder,private onlineRegistration:OnlineRegistrationService,private toastr:ToastrService) { }
  
  ngOnInit(): void {
    this.paymentCodeForm1 = this.fb.group({
      paymentCodes:['',Validators.required]
    })
  }
  get f1(){
    return this.paymentCodeForm1.controls;
  }
  submitCode(e){
    this.submitted = true;
    if(this.paymentCodeForm1.invalid){
      return;
      
    }else if(this.paymentCodeForm1.value.paymentCodes === 'Icmda1$')  {
      this.modeltoggle = false;
      this.participantDetails()
      this.paymentsMode = true;
    } 
  }
  participantDetails(){
    this.submitted = false;
   this.paymentCodeForm = this.fb.group({
    transactionId:['',Validators.required],
    paymentMode:['',Validators.required],
    paymentDate:['',Validators.required],
    name:['',Validators.required],
    phoneNumber:['',Validators.required],
    // occupied:['',Validators.required],
    // paymentCode:['',Validators.required],
    amount:['',Validators.required],
    slotType:['',Validators.required]
   })
  }
  Generate(){
   let number= Math.floor((Math.random() * 999999) + 1);
   this.generateNumber = number;
   this.paymentCodeForm.value.paymentCode = this.generateNumber
   console.log( this.paymentCodeForm.value.paymentCode,"number")
  }
  get f(){
    return this.paymentCodeForm.controls;
  }
  slotType(event){
     this.slotTypeValue = event.target.value;
  }
  submitForm(){
    this.submitted1 = true;
    if(this.paymentCodeForm.invalid){
      return;
    }
    const data={
      "payment_mode": this.paymentCodeForm.value.paymentMode,
      "transaction_id": this.paymentCodeForm.value.transactionId,
      "payment_date": this.paymentCodeForm.value.paymentDate,
      "name": this.paymentCodeForm.value.name,
      "phone_number": this.paymentCodeForm.value.phoneNumber,
      "payment_code": this.generateNumber,
      "amount":this.paymentCodeForm.value.amount,
      "slot_type": this.paymentCodeForm.value.slotType
    }
    this.onlineRegistration.paymentData(data).subscribe((res:any)=>{
      if(res.data ===null){
        this.toastr.error(res.err)
      }else{
        Swal.fire({
          icon: "success",
          title:
            "success",
          showConfirmButton: true,
        }).then((suuess) => {
          // this.router.navigate([""]);
          // this.registrationForm.reset();
          this.paymentCodeForm.reset();
        
        this.submitted = false;
        });
        this.toastr.success(res.data)
        
      }
    })
  }

}