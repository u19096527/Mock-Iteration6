import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Module } from 'src/app/shared/module';
import { Department } from 'src/app/shared/department';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

  mod: Module[] = []
  dep: Department[] = []

  constructor(private dService: DataService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.GetAllDepartments()
    console.log(this.mod)
    console.log(this.dep)
    this.GetAllModules()
  }

  //Get All Departments
  GetAllDepartments() {
    this.dService.GetAllDepartments().subscribe(result => {
      let depList: any[] = result
      depList.forEach((element) => {
        this.dep.push(element)
      });
    })
  }


  //Get All Modules
  GetAllModules() {
    this.dService.GetAllModules().subscribe(result => {
      let modList: any[] = result
      modList.forEach((element) => {
        this.mod.push(element)
      });
    })
  }


  //Delete a department
  deleteModule(module_ID: Number) {
    this.dService.DeleteModule(module_ID).subscribe((response: any) => {
      this.snackbar.open('Module has been successfully Deleted', 'Close', { duration: 3000 });
      this.GetAllModules();
      window.location.reload();
    })
  }


  //Update Module page link
  updateModule(module_ID: Number) {
    this.router.navigate(['/updateMod', module_ID]);
  }


  //Get All Suppliers
  searchInput: string = "";
  searchModule() {
    if (this.searchInput.trim() === "") {
      location.reload();
      this.GetAllModules();
    }
    else {
      this.dService.SearchModule(this.searchInput).subscribe(result => {
        let modList: any[] = result;
        this.mod = [];
        modList.forEach((element) => {
          this.mod.push(element);
        })
      })
    }
  }
}
