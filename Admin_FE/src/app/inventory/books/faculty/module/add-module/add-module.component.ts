import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Module } from 'src/app/shared/module';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Department } from 'src/app/shared/department';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.scss']
})
export class AddModuleComponent implements OnInit{

  mod: Module[] = []
  dep: Department[] = []

  constructor(private data: DataService, private router: Router, private snackbar: MatSnackBar) { }

  formAdd: FormGroup = new FormGroup
    ({
      name: new FormControl('', [Validators.required]),
      description:new FormControl('', [Validators.required]),
      depID:new FormControl('', [Validators.required]),
      
    })

  ngOnInit(): void {
    this.GetAllDepartments()
    console.log(this.dep)
  }

  //Get All Departments
  GetAllDepartments() {
    this.data.GetAllDepartments().subscribe(result => {
      let depList: any[] = result
      depList.forEach((element) => {
        this.dep.push(element)
      });
    })
  } 

  addModule() {
    let mod = new Module();
    mod.module_Code = this.formAdd.value.name;
    mod.description = this.formAdd.value.description;
    mod.department_ID = this.formAdd.value.depID;Number(this.selectedOption);

    this.data.AddModule(mod).subscribe((response: any) => {
        this.snackbar.open('Module has been successfully Added', 'Close', { duration: 3000 });
        this.router.navigate(['/module'])
    });

  }

  selectedOption:string = "";
  onOptionChange(target:any){
    const value = target.value;
    this.selectedOption = value;
  }
}