import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterService } from '../register/register.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-find-teacher',
  templateUrl: './find-teacher.component.html',
  styleUrls: ['./find-teacher.component.css']
})
export class FindTeacherComponent implements OnInit {
  public popup: boolean = false;
  public email: string;
  public noCheckList: boolean = true;
  public login: boolean = false;
  public filterGroup: FormGroup;
  public submitted: boolean = false;
  public teachersList: Array<object> = [];
  public artForm: Array<object> = [
    { id: 21, cat_id: 2, name: "BHARATHANATYAM" },
    { id: 22, cat_id: 2, name: "KUCHIPUDI" },
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
    { id: 22, cat_id: 1, name: "KAZOO" }
  ]
  studentDetails: object;
  buttonValue: string;
  showText: boolean = false;
  teacherData: any;
  allTeachersList: any = [];
  countriesList: any = [];
  allCityList: any = [];
  constructor(private modalService: BsModalService, private fb: FormBuilder,
    private regService: RegisterService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.filterGroup = this.fb.group({
      artForm: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required]
    })
  }

  get f() {
    return this.filterGroup.controls;
  }

  submitFilter() {
    this.submitted = true;
    if (this.filterGroup.invalid) {
      return;
    }
    this.regService.getTeacherFilter(this.filterGroup.value).subscribe((res: any) => {
      console.log(res);
      if (res.status == 'success') {
        this.teachersList = res?.details;
      } else if (res.status == 'error') {
        this.teachersList = [];
        Swal.fire({
          icon: "error",
          title: res?.message,
          showConfirmButton: true,
        })
      }
    })

  }

  openPopup(popup) {
    this.email = undefined;
    this.modalService.show(popup);
  }

  connect() {
    const reqObj = {
      "teacher_id": this.teacherData['id'],
      "student_id": this.studentDetails['id'],
      "status": this.buttonValue
    }
    this.regService.connectTeacher(reqObj).subscribe((res: any) => {
      if (res.status == 'success') {
        this.logIn();
        this.submitFilter();
        this.popup = false;
        Swal.fire({
          icon: "success",
          title: res?.message,
          showConfirmButton: true,
        })
      } else {
        Swal.fire({
          icon: "error",
          title: res?.message,
          showConfirmButton: true,
        })
      }
    })
  }

  openDetails(teacherData) {
    this.teacherData = teacherData;
    if (!this.studentDetails['teacher_id']) {
      this.buttonValue = 'Connect';
      this.showText = false;
    } else {
      if (this.studentDetails['teacher_id'] == teacherData['id']) {
        this.buttonValue = 'Disconnect';
        this.showText = false;
      } else {
        this.showText = true;
      }
    }
    this.popup = true;
  }

  logIn() {
    this.login = true;
    if (this.email) {
      this.regService.getMemberDetails(this.email).subscribe((res: any) => {
        if (res?.status == 'success') {
          this.getAllTeachers();
          this.studentDetails = res.details;
          this.modalService.hide();
          this.noCheckList = false;
        } else if (res?.status == 'error') {
          Swal.fire({
            icon: "error",
            title: res?.message,
            showConfirmButton: true,
          })
        }
      })
    }
  }

  getAllTeachers() {
    this.regService.getTeacherFilter({}).subscribe((res) => {
      console.log(res);
      this.allTeachersList = res['details'];
      this.countriesList = [...new Map(res['details'].map(item => [item['country'].toLowerCase(), item])).values()]
    })
  }

  countrySelect(event) {
    let cityList = this.allTeachersList.filter((res) => res.country.toLowerCase() == event.target.value.toLowerCase());
    this.allCityList = [...new Map(cityList.map(item => [item['city'].toLowerCase(), item])).values()]
  }

  close() {
    this.modalService.hide();
  }

}
