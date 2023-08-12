import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { EquipmentType } from 'src/app/shared/equipment_type';


@Component({
  selector: 'app-equipment-type',
  templateUrl: './equipment-type.component.html',
  styleUrls: ['./equipment-type.component.scss']
})
export class EquipmentTypeComponent implements OnInit {

  equipment_type: EquipmentType[] = []

  constructor(private dService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.GetAllEquipmentTypes()
    console.log(this.equipment_type)
  }

  //Get All Suppliers
  GetAllEquipmentTypes() {
    this.dService.GetAllEquipmentTypes().subscribe(result => {
      let etList: any[] = result
      etList.forEach((element) => {
        this.equipment_type.push(element)
      });
    })
  }

  //Delete an Equipment Type
  deleteEquipmentType(equipmentType_ID: Number) 
  {
    this.dService.DeleteEquipmentType(equipmentType_ID).subscribe((response: any) => 
    {
      if (response.statusCode == 200) 
      {
        this.GetAllEquipmentTypes();
      }
      else 
      {
        alert("UnSuccessful!");
        window.location.reload();
      }
    })
  }

  //Update Equipment Type page link
  updateEquipmentType(equipmentType_ID: Number) {
    this.router.navigate(['/updateET', equipmentType_ID]);
  }

  //Get All Suppliers
  searchInput: string = "";
  searchEquipmentType() {
    if (this.searchInput.trim() === "") {
      window.location.reload();
      this.GetAllEquipmentTypes();
    }
    else {
      this.dService.SearchEquipmentType(this.searchInput).subscribe(result => {
        let etList: any[] = result;
        this.equipment_type = [];
        etList.forEach((element) => {
          this.equipment_type.push(element);
        })
      })
    }
  }
}