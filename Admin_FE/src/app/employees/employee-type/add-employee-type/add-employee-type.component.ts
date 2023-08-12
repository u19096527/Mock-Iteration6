import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeType } from 'src/app/shared/employee-type';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-employee-type',
  templateUrl: './add-employee-type.component.html',
  styleUrls: ['./add-employee-type.component.scss']
})
export class AddEmployeeTypeComponent implements OnInit {
  employeeTypes: EmployeeType[] = [];
  showConfirmationModal: boolean = false;
  showSuccessModal: boolean = false; // Add a flag for success modal

  formAdd: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  constructor(private dataService: DataService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.getAllEmployeeTypes();
  }

  getAllEmployeeTypes(): void {
    this.dataService.getAllEmployeeTypes().subscribe(result => {
      this.employeeTypes = result;
    });
  }

  addEmployeeType(): void {
    if (this.formAdd.invalid) {
      return;
    }

    // Check if the fields are empty
    if (!this.formAdd.value.name || !this.formAdd.value.description) {
      // Display an error message or perform some other action to notify the user
      return;
    }

    this.showConfirmationModal = true;
  }

  confirmAddEmployeeType(): void {
    const employeeType: EmployeeType = {
      employeeType_ID: 0,
      name: this.formAdd.value.name,
      description: this.formAdd.value.description
    };

    this.dataService.addEmployeeType(employeeType).subscribe(
      () => {
        // Success handling
        this.showConfirmationModal = false; // Hide the confirmation modal
        this.showSuccessModal = true; // Show the success modal
        this.router.navigate(['/employee_type']); // Refresh the employeeTypes list after addition
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  navigateToEmployeeTypePage(): void {
    this.router.navigate(['/employee_type']);
  }
}
