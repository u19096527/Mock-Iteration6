import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Employee } from 'src/app/shared/employee';
import { EmployeeType } from 'src/app/shared/employee-type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeForm!: FormGroup;
  employeeTypes: any[] = []; // Assuming the response from the API is an array of employee types
  formErrors: { [key: string]: string } = {}; // Define formErrors here
  
  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {
    this.addEmployeeForm = this.fb.group({
      employee_Type_ID: [0, Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      cell_Number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      physical_Address: ['', Validators.required],
      birthDate: ['', Validators.required],
      emergency_Contact_Name: ['', Validators.required],
      emergency_Contact_Cell: ['', Validators.required],
    });

    this.getAllEmployeeTypes();
  }

  getAllEmployeeTypes(): void {
    this.dataService.getAllEmployeeTypes().subscribe(
      (response) => {
        this.employeeTypes = response;
      },
      (error) => {
        console.error(error); // Handle error here (e.g., show error message)
      }
    );
  }

  addEmployee(): void {
    if (this.addEmployeeForm.valid) {
      const employee: Employee = this.addEmployeeForm.value;
      this.dataService.addEmployee(employee).subscribe(
        (response) => {
          console.log(response); // Handle success response here (e.g., show success message or navigate to another page)
          // Reset the form after successful addition
          this.addEmployeeForm.reset();
        },
        (error) => {
          console.error(error); // Handle error here (e.g., show error message)
        }
      );
    }
  }

  resetForm(): void {
    this.addEmployeeForm.reset();
  }
}
