import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Department } from 'src/app/shared/department';
import { Faculty } from 'src/app/shared/faculty';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit{
  dep: Department[] = []
  fac: Faculty[] = []

  constructor(private dService: DataService, private router: Router, private  snackbar: MatSnackBar) { }

  ngOnInit(): void 
  { 
    this.GetAllDepartments()
    this.GetAllFaculties()
    console.log(this.dep)
  }

  //Get All Departments
  GetAllDepartments() {
    this.dService.GetAllDepartments().subscribe(result => {
      let depList: any[] = result
      depList.forEach((element) => {
        this.dep.push(element)
      });
    })
  }

  //Get All Department
  GetAllFaculties() {
    this.dService.GetAllFaculties().subscribe(result => {
      let facList: any[] = result
      facList.forEach((element) => {
        this.fac.push(element)
      });
    })
  }

  //Delete a department
  deleteDepartment(department_ID: Number) 
  {
    this.dService.DeleteDepartment(department_ID).subscribe((response: any) => 
    {
        this.GetAllDepartments();
        this.snackbar.open('Department has been successfully Deleted', 'Close', { duration: 3000 });
        window.location.reload();
    })
  }

  //Update Department page link
  updateDepartment(department_ID: Number) {
    this.router.navigate(['/updateDep', department_ID]);
  }


  //Get Search
  searchInput: string = "";
  searchDepartment() {
    if (this.searchInput.trim() === "") {
      location.reload();
      this.GetAllDepartments();
    }
    else {
      this.dService.SearchDepartment(this.searchInput).subscribe(result => {
        let depList: any[] = result;
        this.dep = [];
        depList.forEach((element) => {
          this.dep.push(element);
        })
      })
    }
  }
}