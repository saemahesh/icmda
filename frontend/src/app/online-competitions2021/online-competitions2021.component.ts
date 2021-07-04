import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-online-competitions2021',
  templateUrl: './online-competitions2021.component.html',
  styleUrls: ['./online-competitions2021.component.css']
})
export class OnlineCompetitions2021Component implements OnInit {

  constructor(private router: Router, private modalService: NgbModal) { }
  closeResult = '';
  modalOptions: NgbModalOptions
  ngOnInit(): void {
    this.modalOptions = {
      backdropClass: 'customBackdrop'
    }
  }

  goNavigate(type) {
    if (type == 'register') {
      this.router.navigate(['/online-competition-results-2021/register'])
    } else if (type == 'update') {
      this.router.navigate(['/online-competition-results-2021/update'])
    }
  }

  open(content) {
    this.modalService.open(content)
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
