import { OnlineRegistrationService } from "./../online-registration/online-registration.service";
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-view-payment-codes',
  templateUrl: './view-payment-codes.component.html',
  styleUrls: ['./view-payment-codes.component.css']
})
export class ViewPaymentCodesComponent implements OnInit {
  paymentCodeForm1: FormGroup;
  paymentsMode = false;
  submitted = false;
  submitted1 = false;
  paymentCodes:string;
  public search: string;
  modeltoggle = true;
  paymentHistory:any=[];
  searchField:any=[];
  constructor(private fb:FormBuilder,private service:OnlineRegistrationService) { }
  
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
      this.getPaymentHistoryList()
      this.paymentsMode = true;
    } 
  }
  getPaymentHistoryList(){
    this.service.getPaymentHistoryList().subscribe((res:any)=>{
      this.paymentHistory =res['primary'];
      this.searchField = res['primary']
    })
  }
  searchTable(): void {
    const search = this.search.toLowerCase();
    this.searchField = this.paymentHistory.filter(lead => {
      return lead.name.toLowerCase().indexOf(search) !== -1 ||
      lead.phone_number?.toLowerCase().indexOf(search) !== -1 ||
      lead.slot_type?.toLowerCase().indexOf(search) !== -1;
    });
  }
  
}
