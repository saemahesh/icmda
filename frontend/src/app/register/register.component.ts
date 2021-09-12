import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  artSub: number;
  selectedCat = 0;
  diffCat = [];
  selectArtFormCategory: any = false;
  openArtForm: any = true;
  memberType = [{ name: 'Teacher' }, { name: 'Student' }, { name: 'Artist' }];
  artCategory = [{ id: 1, cat: 'Music' }, { id: 2, cat: 'Dance' }]
  musicSubCat: any = [
    { id: 1, cat: 'Vocal' },
    { id: 2, cat: 'Instruments' },
    { id: 3, cat: 'Rythm' }
  ];
  allDanceList = [
    { id: 21, cat_id: 2, name: "BHARATHANATYAM" },
    { id: 22, cat_id: 2, name: "KUCHIPUDI" },
    { id: 22, cat_id: 2, name: "MOHINI ATAM" },
    { id: 22, cat_id: 2, name: "KATHAKALI" },
    { id: 22, cat_id: 2, name: "KATHAK" },
    { id: 22, cat_id: 2, name: "IDISI" },
    { id: 22, cat_id: 2, name: "ANDHRA NATYAM" }
  ];
  allInstrumentList = [
    { id: 2, cat_id: 1, name: "VEENA" },
    { id: 3, cat_id: 1, name: "VIOLIN" },
    { id: 4, cat_id: 1, name: "GUITAR" },
    { id: 5, cat_id: 1, name: "SAXOPHONE" },
    { id: 6, cat_id: 1, name: "FLUTE" },
    { id: 7, cat_id: 1, name: "NADHASWARAM" },
    { id: 8, cat_id: 1, name: "CLARINATE" },
    { id: 9, cat_id: 1, name: "GOTTU VADYAM" },
    { id: 10, cat_id: 1, name: "KEYBOARD" },
    { id: 11, cat_id: 1, name: "THAMBOORA" },
    { id: 12, cat_id: 1, name: "SITHAR / CARNATIC" },
    { id: 21, cat_id: 1, name: "JALATHARAGAM" },
    { id: 22, cat_id: 1, name: "KAZOO" }
  ];
  allRythmList = [
    { id: 13, cat_id: 1, name: "MRIDHANGAM" },
    { id: 14, cat_id: 1, name: "GATAM" },
    { id: 15, cat_id: 1, name: "MORSING" },
    { id: 16, cat_id: 1, name: "KANJIRA" },
    { id: 17, cat_id: 1, name: "TABLA" },
    { id: 18, cat_id: 1, name: "THAVIL" },
    { id: 19, cat_id: 1, name: "KONNAKOL" },
    { id: 20, cat_id: 1, name: "DRUMS SPADS" }
  ];  memberShipTypes: any = [
    { type: 'Annual' },
    { type: 'Life-Time' }
  ]
  registrationForm: FormGroup;
  submitted = false;
  selectedValue: any;
  certificateSelected: any;
  paymentreceipt: any;
  memberTypeValue: boolean = false;
  day: any;
  age: string;
  year: string;
  month: string;
  dayModel: any;
  yearModel: any;
  monthModel: any;
  amount: number;
  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router, private toastrService: ToastrService) { }
  ngOnInit() {
    this.buildForm();
    this.loadDOBData();
  }

  buildForm() {
    this.registrationForm = this.fb.group({
      memberType: ['', Validators.required],
      artistName: ['', Validators.required],
      artCategory: ['', Validators.required],
      artForm: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+[a-zA-Z_.0-9]*\@\w+\.\w+/)]],
      mobileNumber: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
      artSubCategory: ["", Validators.required],
      aadharNo: [""],
      membershipType: ["", Validators.required],
      aboutYourSelf: [""],
      video1: [""],
      video2: [""],
      video3: [""],
      video4: [""]
    })
  }

  get f() {
    return this.registrationForm.controls;
  }

  submitForm() {
    console.log("bb", this.registrationForm);
    if (this.registrationForm.value['artCategory'] == 'Dance') {
      this.registrationForm.controls['artSubCategory'].setErrors(null);
      this.registrationForm.value['artSubCategory'] = this.registrationForm.value['artForm'];
    }

    if (this.registrationForm.value['artSubCategory'] == 'Vocal') {
      this.registrationForm.controls['artForm'].setErrors(null);
      this.registrationForm.value['artForm'] = this.registrationForm.value['artSubCategory']
    }
    this.submitted = true;
    if (this.day && this.month && this.year) {
      this.age = this.day + '-' + this.month + '-' +  this.year;
    }
    if (this.registrationForm.invalid || !this.selectedValue || !this.paymentreceipt) {
      return;
    }
    const object = {
      imageUrl: this.selectedValue,
      certificateUrl : this.certificateSelected,
      paymentReceipt : this.paymentreceipt,
      formValues: this.registrationForm.value
    }
    object.formValues['age'] = this.age;
    this.registerService.postUserDetails(object).subscribe(res => {
      this.submitted = false;
      if (res.code === 'ER_DUP_ENTRY') {
        this.toastrService.error('Email already exists');

      } else if (res.token.affectedRows === 1) {
        this.toastrService.success('Successfully registered..Thank you ', 'Success', {
          timeOut: 3000
        });
        setTimeout(() => {
          this.router.navigate(['']);
        }, 3000);
        this.registrationForm.reset();

      } else {
        this.toastrService.error('Something went wrong, Please try again');
      }

    }, error => {
      if (error.code === 'ER_DUP_ENTRY') {
        this.toastrService.error('Email already exists');
        console.log("Erororor", error);
      }
      this.toastrService.error(error.code)

    });
  }

  yourOnUploadHandler(event) {
    this.selectedValue = event.cdnUrl;
  }

  yourOnCertificateUploadHandler(event) {
    this.certificateSelected = event.cdnUrl;
  }

  yourOnPaymentReceipt(event){
    this.paymentreceipt = event.cdnUrl;
  }

  onChangeCat(cat_id: number) {
    this.diffCat = [];
    console.log(this.artCategory.filter((x: any) => console.log(x.cat)));
    if (this.artCategory.filter((x: any) => x.cat === cat_id)[0].cat == 'Music') {
      this.selectArtFormCategory = true;
      this.openArtForm = false;
    } else {
      this.selectArtFormCategory = false;
      this.diffCat = this.allDanceList;
      this.openArtForm = true;
    }
    this.musicSubCat = this.musicSubCat;
    this.selectedCat = cat_id;
  }

  changeArtSubCat(cat_id: any) {
    if (cat_id != 'Vocal') {
      this.openArtForm = true;
    } else {
      this.openArtForm = false;
      this.diffCat = [];
    }
    if (cat_id == 'Vocal') {
      this.diffCat = [{ id: 1, cat_id: 1, name: 'VOCAL' }];
    } else if (cat_id == 'Instruments') {
      this.diffCat = this.allInstrumentList;
    } else if (cat_id = 'Rythm') {
      this.diffCat = this.allRythmList;
    }
    this.artSub = cat_id;
  }

  onMemberTypeSelect(value: any) {
    if (value == 'Student') {
      this.memberTypeValue = false;
    } else {
      this.memberTypeValue = true;
    }
  }

  daychnage(dayParam) {
    this.day = dayParam
  }
  monthChange(monthParam) {
    this.month = monthParam
  }
  yearChange(yearParam) {
    this.year = yearParam;
  }

  loadDOBData() {
    let dayarr = []
    for (let i = 1; i <= 31; i++) {
      dayarr.push(i)
    }
    this.dayModel = dayarr;
    let yeararr = [];
    for (let j = 2020; j >= 1950; j--) {
      yeararr.push(j);
    }
    this.yearModel = yeararr;
    this.monthModel = [
      { name: "JAN" },
      { name: "FEB" },
      { name: "MAR" },
      { name: "APR" },
      { name: "MAY" },
      { name: "JUNE" },
      { name: "JULY" },
      { name: "AUG" },
      { name: "SEPT" },
      { name: "OCT" },
      { name: "NOV" },
      { name: "DEC" }
    ]
  }

  membershipType(value) {
    if (value == 'Annual') {
      this.amount = 1000;
    } else if (value == 'Life-Time') {
      this.amount = 5000;
    }
  }

  memberBenefits(){
    this.router.navigate(['/member-benefits']);
  }
}
