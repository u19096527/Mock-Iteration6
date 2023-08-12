import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Student } from 'src/app/shared/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {

  constructor(private dataService: DataService, private router: Router, private snackbar: MatSnackBar) { }

  formAddStudent: FormGroup = new FormGroup
    ({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      cell_Number: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    })

    ngOnInit(): void {}
      
    addNewStudent() {
      let newStudent = new Student();
      newStudent.name = this.formAddStudent.value.name;
      newStudent.surname = this.formAddStudent.value.surname;
      newStudent.cell_Number = this.formAddStudent.value.cell_Number;
      newStudent.email = this.formAddStudent.value.email;

      this.dataService.AddNewStudent(newStudent).subscribe( result  => {
        console.log(newStudent);
        console.log(result);
        this.router.navigate(['/students'])
        this.snackbar.open('Student has been successfully added', 'Close', { duration: 3000 });
      });

    }

}