import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeType } from 'src/app/shared/employee-type';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee-type',
  templateUrl: './update-employee-type.component.html',
  styleUrls: ['./update-employee-type.component.scss']
})
export class UpdateEmployeeTypeComponent implements OnInit {

  upEmployeeType: EmployeeType = {
    employeeType_ID: 0,
    name: '',
    description: ''
  };
  formUpdate: FormGroup;

  constructor(
    private data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.formUpdate = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const employeeTypeId = params['id'];
      this.data.getEmployeeType(employeeTypeId).subscribe(response => {
        this.upEmployeeType = response as EmployeeType;
        this.formUpdate.patchValue({
          name: this.upEmployeeType.name,
          description: this.upEmployeeType.description
        });
      });
    });
  }

  updateEmployeeType(): void {
    if (this.formUpdate.valid) {
      const employeeType: EmployeeType = {
        employeeType_ID: this.upEmployeeType.employeeType_ID,
        name: this.formUpdate.value.name,
        description: this.formUpdate.value.description
      };

      this.data.updateEmployeeType(employeeType.employeeType_ID, employeeType).subscribe((response: any) => {
        // Success handling
        this.router.navigate(['/employee_type']); // Refresh the employeeTypes list after addition
        
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
    }
  }
}

