import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Equi } from 'src/app/shared/equipment2';
import { Router } from '@angular/router';
import { EquipmentType } from 'src/app/shared/equipment_type';
import { Module } from 'src/app/shared/module';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lab-equipment',
  templateUrl: './lab-equipment.component.html',
  styleUrls: ['./lab-equipment.component.scss']
})

export class LabEquipmentComponent implements OnInit {

  constructor(private dataservices: DataService, private router: Router,
    private dialog: MatDialog, private snackBar: MatSnackBar, @Inject(MAT_SNACK_BAR_DEFAULT_OPTIONS) private defaultSnackBarConfig: MatSnackBarConfig) { }
    
  equipments: Equi[] = [];
  Modules: Module[] = [];
  searchText: String = '';

  ngOnInit(): void {
    this.GetEquipments()
    console.log(this.equipments);
    this.GetAllModules()

  }



  GetEquipments() {
    this.dataservices.GetEquipments().subscribe(result => {
      let EquipmentList: any[] = result
      EquipmentList.forEach((element) => {
        this.equipments.push(element)
      });
    })

  }

  searchEquipments() {
    if (this.searchText.trim() === '') {
      this.GetEquipments();
      console.log('Empty search text');
    } else {
      this.dataservices.searchEquipment(this.searchText).subscribe(
        result => {
          let EquipmentList: any[] = result;
          this.equipments = []; // Clear the array before adding search results
          EquipmentList.forEach((element) => {
            this.equipments.push(element);
          });
          console.log(this.equipments);
        }
      );
    }
  }



  GetAllModules() {
    this.dataservices.GetModules().subscribe(result => {
      let moduleList: any[] = result
      moduleList.forEach((element) => {
        this.Modules.push(element)
      });
    })
  }


  updateEquipment(equipment_ID: Number) {
    this.router.navigate(['/update_equipment', equipment_ID])
  }


  deleteEquipment(equipment_ID: Number): void {
    this.dataservices.DeleteEquipment(equipment_ID).subscribe(
      (response: any) => {
        if (response.statusCode == 200) {
          this.router.navigate(['/lab_equipment']);
          this.GetEquipments();
          this.showDeleteSuccessNotification();
        } else {
          //alert("Success!")
          location.reload();
          this.showDeleteSuccessNotification();
        }
      }
    );
  }

  showDeleteSuccessNotification(): void {
    const snackBarConfig: MatSnackBarConfig = {
      ...this.defaultSnackBarConfig,
      duration: 0, // Set the duration to 0 to prevent automatic closing
    };

    const notificationRef: MatSnackBarRef<SimpleSnackBar> = this.snackBar.open(
      'Equipment deleted successfully',
      'Close',
      snackBarConfig
    );

    notificationRef.onAction().subscribe(() => {
      notificationRef.dismissWithAction();
    });
  }


}