import { Component, OnInit } from '@angular/core';
import { EmployeeType } from 'src/app/shared/employee-type';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-employee-type',
  templateUrl: './employee-type.component.html',
  styleUrls: ['./employee-type.component.scss']
})
export class EmployeeTypeComponent implements OnInit {
  employeeTypes: EmployeeType[] = [];
  searchInput: string = '';

  constructor(
    private router: Router,
    private dataService: DataService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadEmployeeTypes();
    console.log(this.employeeTypes)
    
  }

  loadEmployeeTypes(): void {
    this.dataService.getAllEmployeeTypes().subscribe(
      (data: EmployeeType[]) => {
        this.employeeTypes = data;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  updateEmployeeType(employeeTypeId: number): void {
    // Implement update logic here
    this.router.navigate(['/UpdateE_Type', employeeTypeId])
  }

  deleteEmployeeTypeConfirmation(etId: number): void {
    this.dataService.deleteEmployeeType(etId).subscribe(
      () => {
        // Success handling
        this.loadEmployeeTypes(); // Refresh the employeeTypes list after deletion
        
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
  
  
  // Component code
searchEmployeeTypes() {
  if (this.searchInput.trim() === '') {
    this.employeeTypes = this.employeeTypes; 
    this.loadEmployeeTypes();// Display all items
    return;
  }

  this.dataService.getEmployeeTypes(this.searchInput)
    .subscribe(
      (types: EmployeeType[]) => {
        this.employeeTypes = types;
      },
      (error) => {
        console.error('Error occurred while searching employee types:', error);
      }
    );

  console.log(this.searchInput);
}

  
 
  
}
