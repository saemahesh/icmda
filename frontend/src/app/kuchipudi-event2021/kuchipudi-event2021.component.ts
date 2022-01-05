import { Component, OnInit} from '@angular/core';
import { KuchipudiEvent2021Service } from './kuchipudi-event2021.service';

@Component({
  selector: 'app-kuchipudi-event2021',
  templateUrl: './kuchipudi-event2021.component.html',
  styleUrls: ['./kuchipudi-event2021.component.css']
})
export class KuchipudiEvent2021Component implements OnInit {

  TeacherData;
  bestGurus: any = [];
  uttamaAcharya: any = [];
  gallery: any = [];
  photoData;
  currentUrl;
  currentId;
 
  constructor(private kuchipudievent: KuchipudiEvent2021Service) { }

  ngOnInit(): void {
    this.kuchipudievent.getBestTeachersData().subscribe((data: any) => {
      this.TeacherData = data.records
      // console.log(this.TeacherData)
      this.TeacherData.forEach((teacherdata: any) => {
        if (teacherdata.fields && (teacherdata.fields.TITLE == 'sikamani' || teacherdata.fields.TITLE == 'yesaswi') && teacherdata.fields['AWARD PHOTOS'] && teacherdata.fields['AWARD PHOTOS'][0].url && teacherdata.fields['AWARD PHOTOS'][0].url.length > 0) {
          this.bestGurus.push(teacherdata);
        }
        else if (teacherdata.fields && teacherdata.fields.TITLE == 'tapaswi' && teacherdata.fields['AWARD PHOTOS'] && teacherdata.fields['AWARD PHOTOS'][0].url && teacherdata.fields['AWARD PHOTOS'][0].url.length > 0) {
          this.uttamaAcharya.push(teacherdata);
        }
        else if (teacherdata.fields && teacherdata.fields.TITLE == 'gallery' && teacherdata.fields['AWARD PHOTOS'] && teacherdata.fields['AWARD PHOTOS'][0].url && teacherdata.fields['AWARD PHOTOS'][0].url.length > 0) {
          this.gallery.push(teacherdata);
        }
      });
      this.currentUrl= window.location.href;
   this.currentUrl=this.currentUrl.split("?");
   this.currentUrl=this.currentUrl[1].split("=");
   this.currentId=this.currentUrl[0];
   console.log(this.currentId);
      if (this.currentId) {
        setTimeout(() => {
          let el = document.getElementById(this.currentId);
          console.log(el);
          el.scrollIntoView();
          console.log('\n\n bestGurus ', this.bestGurus)
        }, 5000);
      }
    });
  }

  getLink(index: any, name: any) {
    let data = name.replace(/ /g, "_");
    if(name == 'gallery'){
      data += index
    }
    return data;
  }

  sharePhone(index, name, title) {
    let id = this.getLink(index, name);
    let link = '';
    if(title){
    link = `🇮🇳 ICMDA: We are happy to honor  *${name}* as *${title}* 🏅 for outstanding excellence.
      %0ahttps://www.icmda.in/award-ceremony?${id}`
    } else {
      
    link = `I am happy to attend the International Award Ceremony conducted by ICMDA.
    %0ahttps://www.icmda.in/award-ceremony?${id}`
    }

    window.open("https://api.whatsapp.com/send?text=" + link, "_blank")
  }

}