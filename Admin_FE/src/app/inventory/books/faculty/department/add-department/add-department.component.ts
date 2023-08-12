import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Faculty } from 'src/app/shared/faculty';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Department } from 'src/app/shared/department';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {

  
  fac: Faculty[] = []
  dept: Department[] = []

  constructor(private data: DataService, private router: Router, private snackbar: MatSnackBar) { }

  formAdd: FormGroup = new FormGroup
    ({
      name: new FormControl('', [Validators.required]),
      facID:new FormControl('', [Validators.required])
    })

  ngOnInit(): void {
    this.GetAllFaculties()
    console.log(this.fac)
  }

  //Get All Suppliers
  GetAllFaculties() {
    this.data.GetAllFaculties().subscribe(result => {
      let facList: any[] = result
      facList.forEach((element) => {
        this.fac.push(element)
      });
    })
  }


  addDepartment() {
    let dep = new Department();
    dep.department_Name = this.formAdd.value.name;
    dep.faculty_ID = this.formAdd.value.facID;Number(this.selectedOption);

    this.data.AddDepartment(dep).subscribe((response: any) => {
        this.snackbar.open('Department has been successfully Added', 'Close', { duration: 3000 });
        this.router.navigate(['/department'])
    });

  }

  selectedOption:string = "";
  onOptionChange(target:any){
    const value = target.value;
    this.selectedOption = value;
  }
}