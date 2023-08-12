import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Faculty } from 'src/app/shared/faculty';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-faculty',
  templateUrl: './update-faculty.component.html',
  styleUrls: ['./update-faculty.component.scss']
})
export class UpdateFacultyComponent implements OnInit {

  constructor(private data: DataService, private router: Router, private activated: ActivatedRoute, private snackbar: MatSnackBar) { }

  //Creating the form 
  upFaculty: Faculty = new Faculty();
  formUpdate: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    console.log(this.UpdateFaculty)

    //get id
    this.activated.params.subscribe(params => {


      //get data by query
      this.data.GetFaculty(params['id']).subscribe(response => {

        //place response in page
        this.upFaculty = response as Faculty;

        //place retrieved data in cells
        this.formUpdate.controls['name'].setValue(this.upFaculty.faculty_Name);
      })

    })

  }

  UpdateFaculty() {
    let fac = new Faculty();
    fac.faculty_Name = this.formUpdate.value.name;

    this.data.updateFaculty(this.upFaculty.faculty_ID, fac).subscribe((response: any) => {
      this.router.navigate(['/faculty']);
      this.snackbar.open('Faculty Has Been Successfully Updated', 'Close', { duration: 2000 });
    });

  }

}