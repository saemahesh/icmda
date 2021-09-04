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
  patCat = [];
  groupName: boolean = false;
  CompType: any;
  gender: any;
  selectArtFormCategory: any = false;
  openArtForm: any = true;
  musicSubCat: any = [
    { id: 1, cat: 'Vocal' },
    { id: 2, cat: 'Instruments' },
    { id: 3, cat: 'Rythm' }
  ];
  showLevelSelection: any;
  showCountrySelection: any;
  registrationForm: FormGroup;
  submitted = false;
  selectedValue: any;
  payment_receipt: any;
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
  dayModel: any;
  yearModel: any;
  monthModel: any;
  day: any;
  month: any;
  year: any;
  // identityType = [
  //   { name: "Aadhar Card" },
  //   { name: "Pan card" },
  //   { name: "Voter Card" },
  //   { name: "Others" },
  // ];
  allDanceList = [
    { id: 21, cat_id: 2, name: "BHARATHANATYAM" },
    { id: 22, cat_id: 2, name: "KUCHIPUDI" }
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
  ];
  allRythmList = [
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
    { id: 22, cat_id: 1, name: "KAZOO" }
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
    { id: 1, name: "Sub-Junior (5 - 8 yrs)" },
    { id: 2, name: "Junior (9 - 12 yrs)" },
    { id: 3, name: "Senior (13 - 16 yrs)" },
    { id: 4, name: "Super Senior (17 - 20 yrs)" },
    { id: 5, name: "Open Category for Gold Medal (above 20 yrs)" },
    { id: 6, name: "Prodigy Category (below 15 yrs)" },
    { id: 7, name: "Special Category (no age limit)" }
  ];
  showLevel1 = [
    { id: 1, name: "Sub-Junior (5 - 8 yrs)" },
    { id: 8, name: "Sub-Junior Progressive (5 - 8 yrs)" },
    { id: 2, name: "Junior (9 - 12 yrs)" },
    { id: 9, name: "Junior Progressive (9 - 12 yrs)" },
    { id: 3, name: "Senior (13 - 16 yrs)" },
    { id: 4, name: "Super Senior (17 - 20 yrs)" },
    { id: 5, name: "Open Category for Gold Medal (above 20 yrs)" },
    { id: 6, name: "Prodigy Category (below 15 yrs)" },
    { id: 7, name: "Special Category (no age limit)" }
  ];
  genderList = [{ name: "Male" }, { name: "Female" }, { name: "Others" }];
  artSub: number;
  displayForm: boolean = true;
  type: any;
  updateId: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private eventservice: EventRegisterService
  ) { }
  ngOnInit() {
    this.type = 'add';
    var path = window.location.pathname;
    if (path == '/competition-registration') {
      this.displayForm = false;
      this.type = 'add';
    }
    this.buildForm();
    this.loadDOBData();
    if (path == '/online-competition-results-2021/update') {
      this.getIdData();
      this.type = 'update';
    }
  }

  getIdData() {
    if (history.state.data) {
      var obj = history.state.data;
      this.updateId = obj.id;
      this.registrationForm.patchValue(obj);
      var date = obj.age.split('-')
      console.log(date, obj);
      this.registrationForm.get('age').setValue(date[0]);
      this.month = date[1];
      this.day = date[2];
      this.age = obj.age;
      this.onChangeCat(obj.artCategory);
      this.onChangePatCat(obj.artCategory);
      this.countryChange(obj.country);
      this.selectedValue = obj.imageUrl;
      this.payment_receipt = obj.payment_receipt;
      this.amount = obj.amount;
      if (obj.artCategory == 'Music' && obj.artSubCategory !== 'Vocal') {
        this.changeArtSubCat(obj.artSubCategory);
      }
    } else {
      this.router.navigate(['/online-competition-results-2021']);
    }
  }

  buildForm() {
    this.registrationForm = this.fb.group({
      name: ["", Validators.required],
      // compType: ["Solo", Validators.required],
      artCategory: ["", Validators.required],
      artForm: ["", Validators.required],
      artSubCategory: ["", Validators.required],
      gender: ["", Validators.required],
      age: ["", Validators.required],
      // compLevel: ["", Validators.required],
      participationCategory: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      mobileNumber: ["", Validators.required],
      address: ["", Validators.required],
      country: ["", Validators.required],
      city: ["", Validators.required],
      zipcode: ["", Validators.required],
      teacherName: ["", Validators.required],
      teacherNumber: ["", Validators.required],
      transaction_id: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  get f() {
    return this.registrationForm.controls;
  }

  submitForm() {
    console.log("ccoomminng", this.registrationForm);
    console.log("ffff", this.selectedValue);

    // if(this.selectedCat){
    //   const artCat = this.artCategory.filter((x:any)=>x.id == this.selectedCat)[0].cat;
    //   this.registrationForm.get('artCategory').setValue(artCat);
    // }
    // if(this.artSub){
    //   const artSubcat = this.musicSubCat.filter((x:any)=>x.id == this.artSub)[0].cat;
    //   this.registrationForm.get('artSubCategory').setValue(artSubcat)
    // }

    if (this.registrationForm.value['artCategory'] == 'Dance') {
      this.registrationForm.controls['artSubCategory'].setErrors(null);
      this.registrationForm.value['artSubCategory'] = this.registrationForm.value['artForm'];
    }

    if (this.registrationForm.value['artSubCategory'] == 'Vocal') {
      this.registrationForm.controls['artForm'].setErrors(null);
      this.registrationForm.value['artForm'] = this.registrationForm.value['artSubCategory']
    }

    this.submitted = true;
    if (this.registrationForm.invalid || !this.selectedValue || !this.payment_receipt) {
      this.toastrService.error("Please fill all required fields");
      return;
    }

    const object = {
      imageUrl: this.selectedValue,
      payment_receipt: this.payment_receipt,
      formValues: this.registrationForm.value,
      amount: this.amount,
    };
    object.formValues.age = this.age;
    console.log(object);
    if (this.type == 'add') {
      this.eventservice.postEventDetails(object).subscribe(
        (res) => {
          this.submitted = false;
          if (res.code === "ER_DUP_ENTRY") {
            this.toastrService.error("Email already exists");
          } else if (res.token.affectedRows === 1) {
            Swal.fire({
              icon: "success",
              title:
                "You have successfully registered in this event, Your Registration ID :<br> JUN2021-" +
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
    } else if (this.type == 'update') {
      object.formValues['id'] = this.updateId;
      this.eventservice.putUdateEvent(object).subscribe((res: any) => {
        if (res?.token == 1) {
          Swal.fire({
            icon: "success",
            title:
              "You have successfully Updated your Event, Your Registration ID :<br> JUN2021-" +
              this.updateId +
              ".<br> Please check your email for detailed information",
            showConfirmButton: true,
          }).then((suuess) => {
            this.router.navigate([""]);
          });
        }
      })
    }

  }
  //2015-06-11
  loadDOBData() {
    let dayarr = []
    for (let i = 1; i <= 31; i++) {
      dayarr.push(i)
    }
    this.dayModel = dayarr;

    this.competitionLevel = [
      { name: "State" },
      { name: "National" },
      { name: "International" },
    ];

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


    this.age = this.year + '-' + this.month + '-' + this.day;
    // this.dobChange(new Date(newDob))

  }
  dobChange(value) {
    console.log("llll", value)
    if (value) {
      let currentYear = moment();
      let getYear = moment(value, "YYYY");
      let diff = currentYear.diff(getYear, "years");
      let age: any = Number(diff);
      console.log("llll", age)

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
  yourOnUploadReceipt(event) {
    this.payment_receipt = event.cdnUrl;
  }
  onChangeCat(cat_id: number) {
    this.diffCat = [];
    if (this.artCategory.filter((x: any) => x.cat == cat_id)[0].cat == 'Music') {
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

  onChangePatCat(cat_id: any) {
    if (cat_id === 'Music') {
      this.patCat = this.showLevel1;
    }
    if (cat_id === 'Dance') {
      this.patCat = this.showLevel;
    }
  }

  onChangeCompLevel(ff) {
    var patCat = this.patCat.filter((x: any) => x.name == ff);
    this.showLevelSelection = patCat[0].id;
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
        level_8: 600,
        level_9: 600
      },
      srilanka: {
        level_1: 300,
        level_2: 300,
        level_3: 400,
        level_4: 500,
        level_5: 750,
        level_6: 500,
        level_7: 500,
        level_8: 300,
        level_9: 300
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
