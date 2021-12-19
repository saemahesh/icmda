import { Component, OnInit } from '@angular/core';
import { HelpDeskService } from './help-desk.service';

@Component({
  selector: 'app-help-desk',
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.css']
})
export class HelpDeskComponent implements OnInit {

  FaqData;
  dataFaq;
  validCategories;
  myFunction;
  selectedCategory="";


  constructor(private faqData: HelpDeskService) { }

  ngOnInit(): void {
    let allCategories: any = [];

    this.faqData.getFaqData().subscribe(data => {
      this.FaqData = data;
      this.dataFaq = this.FaqData.records;
      this.dataFaq.forEach((element: any) => {
        allCategories.push(element.fields.Category);
      });
      this.validCategories = [...new Set(allCategories)];
      console.log(this.validCategories);
      
     
    });
  }

  

}
