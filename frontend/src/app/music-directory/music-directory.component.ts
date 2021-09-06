import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-music-directory',
  templateUrl: './music-directory.component.html',
  styleUrls: ['./music-directory.component.css']
})
export class MusicDirectoryComponent implements OnInit {

  constructor(private service: RegisterService) { }

  ngOnInit(): void {
    this.service.getMusicDirectoryDetails().subscribe((res)=>{
      console.log(res)
    })
  }

}
