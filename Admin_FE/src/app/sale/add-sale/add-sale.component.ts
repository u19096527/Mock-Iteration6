import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/student';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.scss']
})
export class AddSaleComponent {

  arrStudents: Student[] = []
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getAllStudents()
    console.log(this.arrStudents)
  }



  //Get All Suppliers
  getAllStudents() {
    this.dataService.GetAllTheStudents().subscribe(result => {
      let listStudents: any[] = result
      listStudents.forEach((element) => {
        this.arrStudents.push(element)
      });
    })
  }

  searchQuery: string = "";
  searchStudent() {
    if (this.searchQuery.trim() === "") {
      window.location.reload();
      this.getAllStudents();
    }
    else {
      this.dataService.SearchStudent(this.searchQuery).subscribe(
        result => {
          let listStudents: any[] = result;
          this.arrStudents = [];
          listStudents.forEach((element) => {
            this.arrStudents.push(element);
          });
        }
      );
    }
  }

}
