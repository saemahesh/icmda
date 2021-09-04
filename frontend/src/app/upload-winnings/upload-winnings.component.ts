import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { UploadWinningsService } from './upload-winnings.service';

@Component({
  selector: 'app-upload-winnings',
  templateUrl: './upload-winnings.component.html',
  styleUrls: ['./upload-winnings.component.css']
})
export class UploadWinningsComponent implements OnInit {
  winningsForm: FormGroup;
  winningUrl: any;
  submitted: boolean = false;
  constructor(private readonly fb: FormBuilder,
              private readonly uploadService: UploadWinningsService,
              private router: Router,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.winningsForm = this.fb.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
    })
  }

  yourOnUploadHandler(event) {
    this.winningUrl = event.cdnUrl;
  }

  submitForm() {
    this.submitted = true;
    if (this.winningsForm.invalid || !this.winningUrl) {
      return;
    }
    const object = {
      winningurl: this.winningUrl,
      id: this.winningsForm.value['id'],
      name: this.winningsForm.value['name']
    }
    this.uploadService.postUploadWinnings(object).subscribe((res: any) => {
      if(res?.message){
        if(res.message == 'success'){
          Swal.fire({
            icon: "success",
            title:"You have successfully submitted your photo",
            showConfirmButton: true,
          }).then((suuess) => {
            this.winningsForm.reset();
            window.location.reload();
          });
        } else if(res.message == 'Not Found'){
          this.toastrService.error('Sorry! Your ID not found', 'Error')
        } else {
          this.toastrService.error('Something Went Wrong!')
        }
      }
    })
  }

  get f() {
    return this.winningsForm.controls;
  }

}
