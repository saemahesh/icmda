import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  galleryPhoto;

  constructor(private router:Router,private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.getGallery().subscribe((data: any) => {
      this.galleryPhoto=data.records;
    });
  }
  register(){
    this.router.navigate(['/register']);
  }
  scrollTo(className: string):void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
 }
}
