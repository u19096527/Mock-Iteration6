import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/shared/student';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute, private snackbar: MatSnackBar) { }

    //Creating the form 
    editedStudent: Student = new Student();
  
    formEditStudent: FormGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      cell_Number: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    })

    ngOnInit(): void {

      //get id
      this.activatedRoute.params.subscribe(params => {
  
  
        //get data by query
        this.dataService.GetSelectedStudent(params['id']).subscribe(response => {
  
          //place response in page
          this.editedStudent = response as Student;
  
          //place retrieved data in cells
          this.formEditStudent.controls['name'].setValue(this.editedStudent.name);
          this.formEditStudent.controls['surname'].setValue(this.editedStudent.surname);
          this.formEditStudent.controls['cell_Number'].setValue(this.editedStudent.cell_Number);
          this.formEditStudent.controls['email'].setValue(this.editedStudent.email);
        })
  
      })
  
    }
  
  editAStudent()
  {
    let selectedStudent = new Student();
    selectedStudent.name = this.formEditStudent.value.name;
    selectedStudent.surname = this.formEditStudent.value.surname;
    selectedStudent.cell_Number = this.formEditStudent.value.cell_Number;
    selectedStudent.email = this.formEditStudent.value.email;

   this.dataService.UpdateAStudent(this.editedStudent.student_ID, selectedStudent).subscribe((response:any) => {
      this.router.navigate(['/students'])
      this.snackbar.open('Student has been successfully edited', 'Close', { duration: 3000 });
   });

  }

}