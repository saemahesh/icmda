import { Component, OnInit } from '@angular/core';
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
    console.log(this.filterGroup.value);
    this.regService.getTeacherFilter(this.filterGroup.value).subscribe((res:any)=>{
      console.log(res);
      if(res?.status == '"success"'){
        this.teachersList =  res;
      } else if(res?.status == 'error') {
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

  logIn() {
    this.login = true;
    if (this.email) {
      this.regService.getMemberDetails(this.email).subscribe((res: any) => {
        if (res?.status == 'success') {
          this.modalService.hide();
          this.noCheckList = false;
        } else if(res?.status == 'error'){
          Swal.fire({
            icon: "error",
            title: res?.message,
            showConfirmButton: true,
          })
        }
      })
    }
  }

  close() {
    this.modalService.hide();
  }

}
