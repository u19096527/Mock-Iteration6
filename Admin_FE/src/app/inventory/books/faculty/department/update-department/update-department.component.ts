import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Faculty } from 'src/app/shared/faculty';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/shared/department';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss']
})
export class UpdateDepartmentComponent implements OnInit {

  fac: Faculty[] = []

  constructor(private data: DataService, private router: Router, private activated: ActivatedRoute, private snackbar: MatSnackBar) { }

  //Creating the form 
  upDepartment: Department = new Department();
  formUpdate: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    facID: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    console.log(this.UpdateDepartment)
    this.GetAllFaculties()
    console.log(this.fac)

    //get id
    this.activated.params.subscribe(params => {


      //get data by query
      this.data.GetDepart(params['id']).subscribe(response => {

        //place response in page
        this.upDepartment = response as Department;

        //place retrieved data in cells
        this.formUpdate.controls['name'].setValue(this.upDepartment.department_Name);
        this.formUpdate.controls['facID'].setValue(this.upDepartment.faculty_ID);
      })

    })

  }



  //Get Fac
  GetAllFaculties() {
    this.data.GetAllFaculties().subscribe(result => {
      let facList: any[] = result
      facList.forEach((element) => {
        this.fac.push(element)
      });
    })
  }

  UpdateDepartment() {
    let dep = new Department();
    dep.department_Name = this.formUpdate.value.name;
    dep.faculty_ID = this.formUpdate.value.facID; Number(this.selectedOption);

    this.data.updateDepartment(this.upDepartment.department_ID, dep).subscribe((response: any) => {
      this.snackbar.open('Department has been successfully Updated', 'Close', { duration: 3000 });
      this.router.navigate(['/department'])
    });

  }



  selectedOption: string = "";
  onOptionChange(target: any) {
    const value = target.value;
    this.selectedOption = value;
  }
}
