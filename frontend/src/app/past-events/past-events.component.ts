import { Component, OnInit } from '@angular/core';
import { PastEventsService } from './past-events.service';

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.css']
})
export class PastEventsComponent implements OnInit {

  pastData:any;
  pastEvent2019:any=[];
  pastEvent2020:any=[];
  pastEvent2021:any=[];
  pastMainData:any=[];
  pastDesData:any=[];

  constructor(private pastEventData:PastEventsService) { }

  ngOnInit(): void {
    this.pastEventData.getPastEvents().subscribe((data: any) => {
      this.pastMainData=data;
      this.pastData=data.records;
      this.pastData.forEach((PastData: any) => {
        if(PastData.fields && (PastData.fields.year == '2019' || PastData.fields.year == '2019to2020' || PastData.fields.year =='2019-20'|| PastData.fields.year == '1st janury' || PastData.fields.year == '3rd janury' ) && PastData.fields.photos && PastData.fields.photos[0].url && PastData.fields.photos[0].url.length > 0)
        {
          this.pastEvent2019.push(PastData);
        }
        else if(PastData.fields && (PastData.fields.year == '02-02- 2020' || PastData.fields.year =='feb 02-2020' || PastData.fields.year =='feb-15-2-2020' || PastData.fields.year =='03-03-2020')  && PastData.fields.photos && PastData.fields.photos[0].url && PastData.fields.photos[0].url.length > 0)
        {
          this.pastEvent2020.push(PastData);
        }
        else if(PastData.fields && (PastData.fields.year == '2021' || PastData.fields.year =='4-4-2021' || PastData.fields.year =='20-3-2021')  && PastData.fields.photos && PastData.fields.photos[0].url && PastData.fields.photos[0].url.length > 0)
        {
          this.pastEvent2021.push(PastData);
        }
        else if(PastData.fields && PastData.fields.main && PastData.fields.main[0].url && PastData.fields.main[0].url.length > 0)
        {
          this.pastMainData.push(PastData);
        }
        else if(PastData.fields && PastData.fields.Name && PastData.fields.Name.length > 0)
        {
          this.pastDesData.push(PastData);
        }
        
      });
  });
}


}
