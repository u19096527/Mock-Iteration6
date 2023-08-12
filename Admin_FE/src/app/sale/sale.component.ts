import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent {

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
  
}
