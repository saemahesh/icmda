import { Component, OnInit, ViewChild } from "@angular/core";
import { UsersDetailsService } from "./users-details.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { AbstractControl, FormBuilder } from "@angular/forms";
@Component({
  selector: "app-users-details",
  templateUrl: "./users-details.component.html",
  styleUrls: ["./users-details.component.css"],
})
export class UsersDetailsComponent implements OnInit {
  displayedColumns: string[] = [
    "sNo",
    "name",
    "age",
    "artCategory",
    "artForm",
    "compCategory",
    "compLevel",
    "id",
    "picture",
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  readonly formControl: AbstractControl;
  userdetails: any;
  dataSource: any;

  constructor(
    public userservice: UsersDetailsService,
    formBuilder: FormBuilder
  ) {
    this.formControl = formBuilder.group({
      name: "",
      artCat: "",
      artForm: "",
      compCat: "",
      compLevel: "",
      id: "",
    });
    this.formControl.valueChanges.subscribe((value) => {
      if (value.name != null) {
        const filter = {
          ...value,
          name: value.name.trim().toLowerCase(),
        } as string;
        this.dataSource.filter = filter;
      }
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userservice.getRegistrationProfiles().subscribe(
      (res) => {
        this.userdetails = res;
        for (let i = 0; i < this.userdetails.length; i++) {
          this.userdetails[i]["sNo"] = i + 1;
        }
        this.dataSource = new MatTableDataSource(this.userdetails);
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (data, filter) => {
          const a =
            !filter.name ||
            data.name.toLowerCase().includes(filter.name.toLowerCase());
          const b =
            !filter.artCat ||
            data.art_category
              .toLowerCase()
              .includes(filter.artCat.toLowerCase());
          const c =
            !filter.artForm ||
            data.art_form.toLowerCase().includes(filter.artForm.toLowerCase());
          const d =
            !filter.compCat ||
            data.comp_category
              .toLowerCase()
              .includes(filter.compCat.toLowerCase());
          const e =
            !filter.compLevel ||
            data.comp_level
              .toLowerCase()
              .includes(filter.compLevel.toLowerCase());
          const f = !filter.id || data.id == filter.id;
          return a && b && c && d && e && f;
        };
        console.log("ff", res);
      },
      (err) => {
        console.log("err", err);
      }
    );
  }
  clearFilters() {
    this.formControl.reset();
    this.dataSource.filter = "";
  }
}
