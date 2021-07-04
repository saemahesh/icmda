import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-online-competitions2021',
  templateUrl: './online-competitions2021.component.html',
  styleUrls: ['./online-competitions2021.component.css']
})
export class OnlineCompetitions2021Component implements OnInit {

  constructor(private router: Router, private modalService: BsModalService) { }
  modalRef: BsModalRef;
  ngOnInit(): void {
    
  }

  goNavigate(type) {
    if (type == 'register') {
      this.router.navigate(['/online-competition-results-2021/register'])
    } else if (type == 'update') {
      this.router.navigate(['/online-competition-results-2021/update'])
    }
  }

  open(content) {
    this.modalRef = this.modalService.show(content);
  }

}
