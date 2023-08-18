import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

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

      Swal.fire({
        title: 'Are you sure you want to delete this student?',
        showConfirmButton: true,
        showDenyButton: true,
        confirmButtonColor: "green",
        confirmButtonText: 'Yes',
        denyButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) //if user clicked yes
        {
          this.dataService.DeleteStudent(student_ID).subscribe( (response:any) => {
            window.location.reload();
          })        
        } else if ( (result.isDenied) || (result.isDismissed))//if user clicked no
        {
          Swal.fire('Delete Student has been aborted', '', 'error')
        }
      })


    }  

  

}