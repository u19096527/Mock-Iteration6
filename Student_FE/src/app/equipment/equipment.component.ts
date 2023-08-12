import { Component, OnInit } from '@angular/core';
import { Books } from '../shared/books';
import { CurrencyPipe } from '@angular/common';
import { Equi } from '../shared/equipment2';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Module } from '../shared/module';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  equipList: Equi[] = []
  module: Module[] = []

  constructor(private data: DataService, private router: Router, private snackbar: MatSnackBar) { }


  ngOnInit(): void {
    this.GetAllEquipments();
    this.GetAllModules();
    console.log(this.equipList)
  }

  GetAllEquipments() {
    this.data.GetEquipments().subscribe(result => {
      let equi: any[] = result
      equi.forEach((element) => {
        this.equipList.push(element)
      });
    })
  }

  GetAllModules() {
    this.data.GetAllModules().subscribe(result => {
      let modList: any[] = result
      modList.forEach((element) => {
        this.module.push(element)
      });
    })
  }

}
