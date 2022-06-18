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
        console.log('\n\n element.fields ', element.fields)
        if(element.fields.answer){
          element.fields.answers = element.fields.answer.split('\n')
        }
        allCategories.push(element.fields.category);
      });
      this.validCategories = [...new Set(allCategories)];
      console.log(this.validCategories);
      
     
    });
  }

  

}
