import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventRegisterService } from "./event-register.service";
import * as moment from 'moment';
import Swal from 'sweetalert2'

@Component({
  selector: "app-event-register",
  templateUrl: "./event-register.component.html",
  styleUrls: ["./event-register.component.css"],
})
export class EventRegisterComponent implements OnInit {
  selectedCat = 0;
  diffCat = [];
  groupName: boolean = false;
  CompType: any;
  gender: any;
  showLevelSelection: any;
  showCountrySelection: any;
  registrationForm: FormGroup;
  submitted = false;
  selectedValue: any;
  age: any;
  compLevel: any;
  amount: any;
  profileImage = false;
  changeSelection: any;
  showImageError = false;
  artCategory = [
    { id: 1, cat: "Music" },
    { id: 2, cat: "Dance" },
  ];
  compCat = [{ id: 1, name: "Solo" }];
  competitionLevel = [];
  dayModel:any;
  yearModel:any;
  monthModel:any;
  day:any;
  month:any;
  year:any;
  // identityType = [
  //   { name: "Aadhar Card" },
  //   { name: "Pan card" },
  //   { name: "Voter Card" },
  //   { name: "Others" },
  // ];
  allList = [
    { id: 1, cat_id: 1, name: "VOCAL" },
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
    { id: 13, cat_id: 1, name: "MRIDHANGAM" },
    { id: 14, cat_id: 1, name: "GATAM" },
    { id: 15, cat_id: 1, name: "MORSING" },
    { id: 16, cat_id: 1, name: "KANJIRA" },
    { id: 17, cat_id: 1, name: "TABLA" },
    { id: 18, cat_id: 1, name: "THAVIL" },
    { id: 19, cat_id: 1, name: "KONNAKOL" },
    { id: 20, cat_id: 1, name: "DRUMS SPADS" },
    { id: 21, cat_id: 1, name: "JALATHARAGAM" },
    { id: 21, cat_id: 2, name: "BHARATHANATYAM" },
    { id: 22, cat_id: 2, name: "KUCHIPUDI" }
  ];
    // { id: 25, cat_id: 1, name: "SANGEETHOPANYAM" },
    // { id: 26, cat_id: 1, name: "NAARASANKEERTANAM" },
    // { id: 27, cat_id: 1, name: "HARIKATHA" },
    // { id: 28, cat_id: 1, name: "VILLUPAATU" },
    // { id: 29, cat_id: 1, name: "PRAVACHANAMS" },
  countryList = [
    { id: 1, name: "India" },
    { id: 2, name: "USA" },
    { id: 3, name: "Europe" },
    { id: 4, name: "Singapore" },
    { id: 5, name: "Srilanka" },
    { id: 6, name: "Reunion Island" },
  ];
  showLevel = [
    { id: 1, name: "Sub-Junior" },
    { id: 2, name: "Junior" },
    { id: 3, name: "Senior" },
    { id: 4, name: "Super Senior" },
    { id: 5, name: "Open Category for Gold Medal" },
    { id: 6, name: "Prodigy Category" },
    { id: 7, name: "Special Category" }
  ];
  genderList = [{ name: "Male" }, { name: "Female" }, { name: "Others" }];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private eventservice: EventRegisterService
  ) { }
  ngOnInit() {
    this.buildForm();
    this.loadDOBData();
  }

  buildForm() {
    this.registrationForm = this.fb.group({
      name: ["", Validators.required],
      compType: ["Solo", Validators.required],
      artCategory: ["", Validators.required],
      artForm: ["", Validators.required],
      gender: ["", Validators.required],
      age: ["", Validators.required],
      compLevel: ["", Validators.required],
      cLevel: ["", Validators.required],
      email: ["", Validators.required],
      mobileNumber: ["",Validators.required],
      address: ["", Validators.required],
      country: ["", Validators.required],
      city: ["", Validators.required],
      zipcode: ["", Validators.required],
      teacherName: ["", Validators.required],
      teacherNumber: ["", Validators.required]
    });
  }

  get f() {
    return this.registrationForm.controls;
  }

  submitForm() {
    console.log("ccoomminng", this.registrationForm);
    console.log("ffff", this.selectedValue);

    this.submitted = true;
    if (this.registrationForm.invalid || !this.selectedValue) {
      this.toastrService.error("Please fill all required fields");
      return;
    }

    const object = {
      imageUrl: this.selectedValue,
      formValues: this.registrationForm.value,
      amount: this.amount,
    };
    object.formValues.age = this.age;
    console.log(object);

    this.eventservice.postEventDetails(object).subscribe(
      (res) => {
        this.submitted = false;
        if (res.code === "ER_DUP_ENTRY") {
          this.toastrService.error("Email already exists");
        } else if (res.token.affectedRows === 1) {
          Swal.fire({
            icon: "success",
            title:
              "You have successfully registered in this event, Your Registration ID :<br> DEC2020-" +
              res.token.insertId +
              ".<br> Please check your email for detailed information",
            showConfirmButton: true,
          }).then((suuess) => {
            this.router.navigate([""]);
            this.registrationForm.reset();
          });
        } else {
          this.toastrService.error("Something went wrong, Please try again");
        }
      },
      (error) => {
        if (error.code === "ER_DUP_ENTRY") {
          this.toastrService.error("Email already exists");
          console.log("Erororor", error);
        }
        this.toastrService.error(error.code);
      }
    );
  }
  //2015-06-11
  loadDOBData(){
    let dayarr=[]
    for(let i=1;i<=31;i++){
      dayarr.push(i)
    }
    this.dayModel=dayarr;

    this.competitionLevel = [
      { name: "State" },
      { name: "National" },
      { name: "International" },
    ];

    let yeararr=[];
    for(let j=1980;j<=2020;j++){
      yeararr.push(j);
    }
    this.yearModel=yeararr;
    this.monthModel=[
    { name: "JAN" },
    { name: "FEB" },
    { name: "MAR" },
    { name: "APR" },
    { name: "MAY" },
    { name: "JUNE" },
    { name: "JULY" },
    { name: "AUG" },
    { name: "SEPT" },
    {  name: "OCT" },
    {  name: "NOV" },
    {  name: "DEC" }
  ]
  }
  daychnage(dayParam) {
    this.day = dayParam
    this.age = this.year + '-' + this.month + '-' + this.day;

  }
  monthChange(monthParam) {
    
    this.month = monthParam
    this.age = this.year + '-' + this.month + '-' + this.day;

  }
  yearChange(yearParam) {
    this.year = yearParam;
  
  
    this.age  = this.year + '-' + this.month + '-' + this.day;
    // this.dobChange(new Date(newDob))
  
}
  dobChange(value) {
    console.log("llll",value)
    if (value) {
      let currentYear = moment();
      let getYear = moment(value, "YYYY");
      let diff = currentYear.diff(getYear, "years");
      let age: any = Number(diff);
      console.log("llll",age)

      // if (!age) {
      //   this.competitionLevel = [];
      // } else if (age >= 18) {
    
      // } else {
      //   this.competitionLevel = [{ name: "State" }];
      // }
    }
  }
  yourOnUploadHandler(event) {
    this.selectedValue = event.cdnUrl;
  }
  onChangeCat(cat_id: number) {
    this.selectedCat = cat_id;
    this.diffCat = this.allList.filter((item) => {
      return item.cat_id === Number(cat_id);
    });
  }
  onChangeCompLevel(ff) {
    this.showLevelSelection = ff;
    this.calculateAmountToPay();
  }
  countryChange(countryValue) {
    this.showCountrySelection = countryValue;
    this.calculateAmountToPay();
  }
  calculateAmountToPay() {
    let amountToPay = {
      other: {
        level_1: 600,
        level_2: 600,
        level_3: 800,
        level_4: 1000,
        level_5: 1500,
        level_6: 1000,
        level_7: 1000,
      },
      srilanka: {
        level_1: 300,
        level_2: 300,
        level_3: 400,
        level_4: 500,
        level_5: 750,
        level_6: 500,
        level_7: 500
      },
    };
    if (this.showCountrySelection && this.showLevelSelection) {
      this.showCountrySelection = this.showCountrySelection.toLowerCase();
      if (
        this.showCountrySelection.includes("sri") &&
        this.showCountrySelection.includes("lanka")
      ) {
        this.showCountrySelection = "srilanka";
      } else {
        this.showCountrySelection = "other";
      }
      this.amount =
        amountToPay[this.showCountrySelection][
        "level_" + this.showLevelSelection
        ];
    } else {
      this.amount = undefined;
    }
  }
}
