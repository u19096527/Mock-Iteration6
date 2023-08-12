import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Module } from 'src/app/shared/module';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/shared/department';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-module',
  templateUrl: './update-module.component.html',
  styleUrls: ['./update-module.component.scss']
})
export class UpdateModuleComponent implements OnInit {

  dep: Department[] = []

  constructor(private data: DataService, private router: Router, private activated: ActivatedRoute, private snackbar: MatSnackBar) { }

  //Creating the form 
  upModule: Module = new Module();
  formUpdate: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    depID: new FormControl('', [Validators.required]),

  })

  ngOnInit(): void {
    console.log(this.UpdateModule)
    this.GetAllDepartments()
    console.log(this.dep)

    //get id
    this.activated.params.subscribe(params => {


      //get data by query
      this.data.GetModule(params['id']).subscribe(response => {

        //place response in page
        this.upModule = response as Module;

        //place retrieved data in cells
        this.formUpdate.controls['name'].setValue(this.upModule.module_Code);
        this.formUpdate.controls['description'].setValue(this.upModule.description);
        this.formUpdate.controls['depID'].setValue(this.upModule.department_ID);
      })

    })

  }

  //Get Dep
  GetAllDepartments() {
    this.data.GetAllDepartments().subscribe(result => {
      let depList: any[] = result
      depList.forEach((element) => {
        this.dep.push(element)
      });
    })
  }


  UpdateModule() {
    let mod = new Module();
    mod.module_Code = this.formUpdate.value.name;
    mod.description = this.formUpdate.value.description;
    mod.department_ID = this.formUpdate.value.depID; Number(this.selectedOption);

    this.data.updateModule(this.upModule.module_ID, mod).subscribe((response: any) => {
        this.snackbar.open('Module has been successfully Updated', 'Close', { duration: 3000 });
        this.router.navigate(['/module'])
    });
  }



  selectedOption: string = "";
  onOptionChange(target: any) {
    const value = target.value;
    this.selectedOption = value;
  }

}