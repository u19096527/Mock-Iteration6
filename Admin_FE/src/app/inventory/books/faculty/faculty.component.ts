import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Faculty } from 'src/app/shared/faculty';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {
  fac: Faculty[] = []

  constructor(private dService: DataService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.GetAllFaculties()
    console.log(this.fac)
  }

  //Get All Faculty
  GetAllFaculties() {
    this.dService.GetAllFaculties().subscribe(result => {
      let facList: any[] = result
      facList.forEach((element) => {
        this.fac.push(element)
      });
    })
  }

  //Delete a Faculty
  deleteFaculty(faculty_ID: Number) {
    this.dService.DeleteFaculty(faculty_ID).subscribe((response: any) => {
      this.snackbar.open('Faculty has been successfully Deleted', 'Close', { duration: 3000 });
      this.GetAllFaculties();
      window.location.reload();
    })
  }

  //Update Equipment Type page link
  updateFaculty(faculty_ID: Number) {
    this.router.navigate(['/updateFac', faculty_ID]);
  }

  //Get All Suppliers
  searchInput: string = "";
  searchFaculty() {
    if (this.searchInput.trim() === "") {
      location.reload();
      this.GetAllFaculties();
    }
    else {
      this.dService.SearchFaculty(this.searchInput).subscribe(result => {
        let facList: any[] = result;
        this.fac = [];
        facList.forEach((element) => {
          this.fac.push(element);
        })
      })
    }
  }

}