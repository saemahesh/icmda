import { Component, OnInit } from '@angular/core';
import { InsertDataService } from './insert-data.service';

@Component({
  selector: 'app-insert-data',
  templateUrl: './insert-data.component.html',
  styleUrls: ['./insert-data.component.css']
})
export class InsertDataComponent implements OnInit {

  records = {"records": [
    {
      "fields": {
        "phone number": "(998) 976-6789",
        "Email id": "xyz@gmail.com",
        "Delivery address": "xyz street,\nabc viilage,\nabcd mandal,xyz district",
        "pincode": "544321",
        "Name": "xyz"
      }
    },
    {
      "fields": {
        "phone number": "(998) 988-8789",
        "Email id": "abc@gmail.com",
        "Delivery address": "abcs street, xyz village,nshajhja\n",
        "pincode": "522221",
        "Name": "abc"
      }
    }
  ]};
  constructor(private service: InsertDataService) { }
  ngOnInit(): void {
    this.service.createDataInAirtable(this.records).subscribe(resData => {
      console.log(resData);
    })

  }

}


