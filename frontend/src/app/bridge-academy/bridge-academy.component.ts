import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BridgeAcademyService } from './bridge-academy.service';

@Component({
  selector: 'app-bridge-academy',
  templateUrl: './bridge-academy.component.html',
  styleUrls: ['./bridge-academy.component.css']
})
export class BridgeAcademyComponent implements OnInit {
  public artForm: Array<string> = ['KUCHIPUDI SYLLABUS', 'BHARATANATYAM SYLLABUS', 'RHYTHM SYLLABUS', 'CARNATIC MUSIC SYLLABUS']
  public syllabusForm: FormGroup;
  public submitted: boolean = false;
  public gradeTypes: any = [];
  public syllabusData: any =[];
  public theoryData: any = [];
  public practicalData: any = [];
  gradeValue: any;
  constructor(private fb: FormBuilder, private bridgeService: BridgeAcademyService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.syllabusForm = this.fb.group({
      artForm: ['', Validators.required],
      gradeType: ['', Validators.required]
    });
  }

  get f() {
    return this.syllabusForm.controls;
  }


  onArtFormSelect(value) {
    this.bridgeService.getSyllabus(value).subscribe((res: any) => {
     this.syllabusData = res.records;
      this.gradeTypes = this.syllabusData.map(value => value.fields);
      this.gradeTypes.sort((a, b) => (a.Name > b.Name) ? 1 : -1);
    })
  }

  onGradeChange(value){
    this.gradeValue = value;
  }

  submit() {
    this.submitted = true;
    if(this.syllabusForm.invalid){
      return;
    }
    const gradeArray = this.syllabusData.filter(value => value.fields.Name == this.gradeValue);
    const theory = gradeArray[0].fields.THEORY;
    const practical = gradeArray[0].fields.PRACTICAL;
    this.theoryData = theory.split("\n");
    this.practicalData = practical.split("\n");
    console.log(this.gradeValue, this.theoryData, this.practicalData);
  }
}
