import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  arrStudents: Student[] = []
  constructor(private dataService: DataService, private router: Router, private snackbar: MatSnackBar) { }

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
  
    searchQuery: string ="";
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
            listStudents.forEach( (element) => {
              this.arrStudents.push(element);
            });
          }
        );
      }
    }

    goToEditStudent(student_ID: Number) {
      this.router.navigate(['/edit-student', student_ID]);
    }

    deleteStudent(student_ID: number){
      this.dataService.DeleteStudent(student_ID).subscribe( (response:any) => {
        window.location.reload();
        this.snackbar.open('Student has been successfully deleted', 'Close', { duration: 3000 });
      })
    }
  

}