import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-music-directory',
  templateUrl: './music-directory.component.html',
  styleUrls: ['./music-directory.component.css']
})
export class MusicDirectoryComponent implements OnInit {
  data: any;
  originalData: any;

  constructor(private service: RegisterService) { }

  ngOnInit(): void {
    this.service.getMusicDirectoryDetails().subscribe((res)=>{
      this.data = res;
      this.originalData = res;
    })
  }
  search(event: any) { // without type info
    let searchData = event.target.value.toLowerCase();
    if (searchData) {
      this.data = this.originalData.filter((item) => {
        if (item.name.toLowerCase().includes(searchData) || item.category.toLowerCase().includes(searchData) || item.type.toLowerCase().includes(searchData)) {
          return true;
        }
        return false;
      });
    } else {
      this.data = this.originalData;
    }
  }

}
