import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  allList = [
    { id: 1, name: 'VOCAL' },
    { id: 2, name: 'VEENA' },
    { id: 3, name: 'VIOLIN' },
    { id: 4, name: 'GUITAR' },
    { id: 5, name: 'SAXOPHONE' },
    { id: 6, name: 'FLUTE' },
    { id: 7, name: 'NADHASWARAM' },
    { id: 8, name: 'CLARINATE' },
    { id: 9, name: 'GOTTU VADYAM' },
    { id: 10, name: 'KEYBOARD' },
    { id: 11, name: 'THAMBOORA' },
    { id: 12, name: 'SITHAR / CARNATIC' },
    { id: 13, name: 'MRIDHANGAM' },
    { id: 14, name: 'GATAM' },
    { id: 15, name: 'MORSING' },
    { id: 16, name: 'KANJIRA' },
    { id: 17, name: 'TABLA' },
    { id: 18, name: 'THAVIL' },
    { id: 19, name: 'KONNAKOL' },
    { id: 20, name: 'DRUMS SPADS' },
    { id: 21, name: 'JALATHARAGAM' },
    { id: 21, name: 'BHARATHANATYAM' },
    { id: 22, name: 'KUCHIPUDI' },
    { id: 23, name: 'KATHAKALI' },
    { id: 24, name: 'MOHINI ATTAM' },
    { id: 25, name: 'SANGEETHOPANYAM' },
    { id: 26, name: 'NAARASANKEERTANAM' },
    { id: 27, name: 'HARIKATHA' },
    { id: 28, name: 'VILLUPAATU' },
    { id: 29, name: 'PRAVACHANAMS' },
  ];
  registrationForm: FormGroup;
  submitted = false;
  selectedValue: any;
  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) { }
  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.registrationForm = this.fb.group({
      artistName: ['', Validators.required],
      artForm: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+[a-zA-Z_.0-9]*\@\w+\.\w+/)]],
      mobileNumber: ['', [Validators.required, Validators.pattern('[1-9]{1}[0-9]{9}')]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
    })
  }

  get f() { return this.registrationForm.controls; }

  submitForm() {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
    const object = {
      imageUrl: this.selectedValue,
      formValues: this.registrationForm.value
    }

    this.registerService.postUserDetails(object).subscribe((res: any) => {
      this.submitted = false;
      this.registrationForm.reset();
    })
  }
  yourOnUploadHandler(event) {
    this.selectedValue = event.cdnUrl;
  }

}
