import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Faculty } from 'src/app/shared/faculty';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.scss']
})
export class AddFacultyComponent implements OnInit {

  fac: Faculty[] = []

  constructor(private data: DataService, private router: Router, private snackbar: MatSnackBar) { }

  formAdd: FormGroup = new FormGroup
    ({
      name: new FormControl('', [Validators.required])
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


  addFaculty() {
    let fac = new Faculty();
    fac.faculty_Name = this.formAdd.value.name;

    this.data.AddFaculty(fac).subscribe((response: any) => {
      this.router.navigate(['/faculty']);
      this.snackbar.open('Faculty Has Been Successfully Added', 'Close', { duration: 2000 });
    });

  }
}

