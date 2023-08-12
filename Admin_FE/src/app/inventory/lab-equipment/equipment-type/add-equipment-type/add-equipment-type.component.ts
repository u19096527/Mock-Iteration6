import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EquipmentType } from 'src/app/shared/equipment_type';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-equipment-type',
  templateUrl: './add-equipment-type.component.html',
  styleUrls: ['./add-equipment-type.component.scss']
})
export class AddEquipmentTypeComponent {
  equipment_Type:EquipmentType[] = []

  constructor(private data: DataService, private router: Router) { }

  formAdd: FormGroup = new FormGroup
    ({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
      
    })

  ngOnInit(): void {
    this.GetAllEquipmentTypes()
  }

  GetAllEquipmentTypes() {
    this.data.GetAllEquipmentTypes().subscribe(result => {
      let etList: any[] = result
      etList.forEach((element) => {
        this.equipment_Type.push(element)
      });
    })
  }


  addEquipmentType() {
    let et = new EquipmentType();
    et.name= this.formAdd.value.name;
    et.description = this.formAdd.value.description;
    
    this.data.AddEquipmentType(et).subscribe((response: any) => {

      if (response.statusCode == 200) {
        this.router.navigate(['/'])
      }
      else {
        alert("Success!");
        this.router.navigate(['/equipment_type'])
      }
    });

  }
}