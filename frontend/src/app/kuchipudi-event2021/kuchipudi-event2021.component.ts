import { Component, OnInit } from '@angular/core';
import { KuchipudiEvent2021Service } from './kuchipudi-event2021.service';

@Component({
  selector: 'app-kuchipudi-event2021',
  templateUrl: './kuchipudi-event2021.component.html',
  styleUrls: ['./kuchipudi-event2021.component.css']
})
export class KuchipudiEvent2021Component implements OnInit {

  // eventData=[{
  //   img:"../../assets/images/5.jpeg",
  //   name:"Gopala Krishna"
  // },
  // {
  //   img:"../../assets/images/2.jpeg",
  //   name:"Gopala Krishna"
  // },
  // {
  //   img:"../../assets/images/6.jpeg",
  //   name:"Gopala Krishna"
  // },
  // {
  //   img:"../../assets/images/4.jpeg",
  //   name:"Gopala Krishna"
  // },{
  // img:"../../assets/images/5.jpeg",
  //   name:"Gopala Krishna"
  // },
  // {
  //   img:"../../assets/images/2.jpeg",
  //   name:"Gopala Krishna"
  // },
  // {
  //   img:"../../assets/images/6.jpeg",
  //   name:"Gopala Krishna"
  // },
  // {
  //   img:"../../assets/images/4.jpeg",
  //   name:"Gopala Krishna"
  // }]
  TeacherData;
  bestGurus: any = [];
  uttamaAcharya:any=[];
  gallery:any=[];
  constructor(private kuchipudievent: KuchipudiEvent2021Service) { }

  ngOnInit(): void {
    this.kuchipudievent.getBestTeachersData().subscribe((data: any) => {
      this.TeacherData = data.records
      // console.log(this.TeacherData)
      this.TeacherData.forEach((teacherdata: any) => {
        if (teacherdata.fields && (teacherdata.fields.TITLE == 'sikamani' || teacherdata.fields.TITLE == 'yesaswi') && teacherdata.fields['AWARD PHOTOS'] && teacherdata.fields['AWARD PHOTOS'][0].url && teacherdata.fields['AWARD PHOTOS'][0].url.length > 0) {
          this.bestGurus.push(teacherdata);
        }
        else if(teacherdata.fields && teacherdata.fields.TITLE == 'tapaswi' && teacherdata.fields['AWARD PHOTOS'] && teacherdata.fields['AWARD PHOTOS'][0].url && teacherdata.fields['AWARD PHOTOS'][0].url.length > 0 )
        {
          this.uttamaAcharya.push(teacherdata);
        }
        else if(teacherdata.fields && teacherdata.fields.TITLE == 'gallery' && teacherdata.fields['AWARD PHOTOS'] && teacherdata.fields['AWARD PHOTOS'][0].url && teacherdata.fields['AWARD PHOTOS'][0].url.length > 0 )
        {
          this.gallery.push(teacherdata);
        }
      });
    });
  }

}
