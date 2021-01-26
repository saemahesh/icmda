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
  selectedCat = 0;
  diffCat=[];
  artCategory=[{id:1,cat:'Music'},{id:2,cat:'Dance'}]
  
  allList = [
    { id: 1, cat_id: 1,name: 'VOCAL'  },
    { id: 2, cat_id: 1,name: 'VEENA' },
    { id: 3, cat_id: 1,name: 'VIOLIN' },
    { id: 4, cat_id: 1,name: 'GUITAR' },
    { id: 5, cat_id: 1,name: 'SAXOPHONE' },
    { id: 6, cat_id: 1,name: 'FLUTE' },
    { id: 7, cat_id: 1,name: 'NADHASWARAM' },
    { id: 8, cat_id: 1,name: 'CLARINATE' },
    { id: 9, cat_id: 1,name: 'GOTTU VADYAM' },
    { id: 10,cat_id: 1, name: 'KEYBOARD' },
    { id: 11,cat_id: 1, name: 'THAMBOORA' },
    { id: 12,cat_id: 1, name: 'SITHAR / CARNATIC' },
    { id: 13,cat_id: 1, name: 'MRIDHANGAM' },
    { id: 14,cat_id: 1, name: 'GATAM' },
    { id: 15,cat_id: 1, name: 'MORSING' },
    { id: 16,cat_id: 1, name: 'KANJIRA' },
    { id: 17,cat_id: 1, name: 'TABLA' },
    { id: 18,cat_id: 1, name: 'THAVIL' },
    { id: 19,cat_id: 1, name: 'KONNAKOL' },
    { id: 20,cat_id: 1, name: 'DRUMS SPADS' },
    { id: 21,cat_id: 1, name: 'JALATHARAGAM' },
    { id: 21,cat_id: 2, name: 'BHARATHANATYAM' },
    { id: 22,cat_id: 2, name: 'KUCHIPUDI' },
    { id: 23,cat_id: 2, name: 'KATHAKALI' },
    { id: 24,cat_id: 2, name: 'MOHINI ATTAM' },
    { id: 25,cat_id: 2, name: 'SANGEETHOPANYAM' },
    { id: 26,cat_id: 2, name: 'NAARASANKEERTANAM' },
    { id: 27,cat_id: 2, name: 'HARIKATHA' },
    { id: 28,cat_id: 2, name: 'VILLUPAATU' },
    { id: 29,cat_id: 2, name: 'PRAVACHANAMS' },
  ];
  registrationForm: FormGroup;
  submitted = false;
  selectedValue: any;
  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router, private toastrService : ToastrService) { }
  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.registrationForm = this.fb.group({
      artistName: ['', Validators.required],
      artForm: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+[a-zA-Z_.0-9]*\@\w+\.\w+/)]],
      mobileNumber: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
    })
  }

  get f() {
    return this.registrationForm.controls;
  }

  submitForm() {
    console.log("bb",this.registrationForm)
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
    const object = {
      imageUrl: this.selectedValue,
      formValues: this.registrationForm.value
    }

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
  onChangeCat(cat_id: number) {
    this.selectedCat = cat_id;
    this.diffCat = this.allList.filter((item) => {
      return item.cat_id === Number(cat_id)
    });
  }
}
