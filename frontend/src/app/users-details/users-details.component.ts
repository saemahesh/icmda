import { Component, OnInit, ViewChild,TemplateRef,ElementRef } from "@angular/core";
import { UsersDetailsService } from "./users-details.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { AbstractControl } from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-users-details",
  templateUrl: "./users-details.component.html",
  styleUrls: ["./users-details.component.css"],
})
export class UsersDetailsComponent implements OnInit {
  markForm: FormGroup;
  submitted = false;
  videourl:any="https://drive.google.com/file/d/1r4i52e7ihLV551aaABAvOpFksN0Z19yz/preview";

  displayedColumns: string[] = [
    "sNo",
    "name",
    "age",
    "artCategory",
    "artForm",
    "compCategory",
    "compLevel",
    "id",
    "picture",
    "action"
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef; 
  readonly formControl: AbstractControl;
  userdetails: any;
  dataSource: any;
  judgesdata:any;
  selectedData:any;
  constructor(
    public userservice: UsersDetailsService, 
    private formBuilder: FormBuilder, 
    private sanitizer: DomSanitizer
  ) {
    this.formControl = formBuilder.group({
      name: "",
      artCat: "",
      artForm: "",
      compCat: "",
      compLevel: "",
      id: "",
    });
    this.formControl.valueChanges.subscribe((value) => {
      if (value.name != null) {
        const filter = {
          ...value,
          name: value.name.trim().toLowerCase(),
        } as string;
        this.dataSource.filter = filter;
      }
    });
  }

  ngOnInit(): void {
    this.getData();
    this.getJudges();
    this.createForm();
  }
  getJudges(){
    this.userservice.getjudges().subscribe((res)=>{     
      this.judgesdata=res;      
        })
  }

  getData() {
    this.userservice.getRegistrationProfiles().subscribe(
      (res) => {
        this.userdetails = res;
        for (let i = 0; i < this.userdetails.length; i++) {
          this.userdetails[i]["sNo"] = i + 1;
        }
        this.dataSource = new MatTableDataSource(this.userdetails);
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (data, filter) => {
          const a =
            !filter.name ||
            data.name.toLowerCase().includes(filter.name.toLowerCase());
          const b =
            !filter.artCat ||
            data.art_category
              .toLowerCase()
              .includes(filter.artCat.toLowerCase());
          const c =
            !filter.artForm ||
            data.art_form.toLowerCase().includes(filter.artForm.toLowerCase());
          const d =
            !filter.compCat ||
            data.comp_category
              .toLowerCase()
              .includes(filter.compCat.toLowerCase());
          const e =
            !filter.compLevel ||
            data.comp_level
              .toLowerCase()
              .includes(filter.compLevel.toLowerCase());
          const f = !filter.id || data.id == filter.id;
          return a && b && c && d && e && f;
        };
        console.log("ff", res);
      },
      (err) => {
        console.log("err", err);
      }
    );
  }
  clearFilters() {
    this.formControl.reset();
    this.dataSource.filter = "";
  }
     
  createForm(){
    this.markForm = this.formBuilder.group({
      judgeName: ['', Validators.required],
      mark: ['', Validators.required],    
  });
     
  }

  get f() { return this.markForm.controls; }

view(data){
  this.selectedData=data;
  var lastSlash = this.selectedData.video_link.lastIndexOf("/");   
  if(this.selectedData.video_link.includes('drive.google.com'))
  {
    this.videourl= this.selectedData.video_link.substring(0,lastSlash)+"/preview"; 
  }else{
    this.videourl= this.selectedData.video_link; 
  }
    
}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.markForm.invalid) {
        return;
    }

   let data={
    "participant_id":this.selectedData.id,
    "judge_id":this.markForm.value.judgeName,
    "marks":this.markForm.value.mark
  }  
  this.userservice.postMarks(data).subscribe((res)=>{
    console.log("--------here",res)
  },(error)=>{
    console.log("-----------here is the error",error);
  }
  );
}

onReset() {
    this.submitted = false;
    this.markForm.reset();
    this.selectedData=[];
}
toggleVideo() {
  this.videoplayer.nativeElement.play();
}
getSantizeUrl(data) {     
   return this.sanitizer.bypassSecurityTrustResourceUrl(data);
}
}
