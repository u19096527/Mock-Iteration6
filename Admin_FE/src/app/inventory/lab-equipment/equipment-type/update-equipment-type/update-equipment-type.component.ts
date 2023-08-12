import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EquipmentType } from 'src/app/shared/equipment_type';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-equipment-type',
  templateUrl: './update-equipment-type.component.html',
  styleUrls: ['./update-equipment-type.component.scss']
})
export class UpdateEquipmentTypeComponent implements OnInit {

  constructor(private data: DataService, private router: Router, private activated: ActivatedRoute) { }

  //Creating the form 
  upEquipmentType: EquipmentType = new EquipmentType();
  formUpdate: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {

    //get id
    this.activated.params.subscribe(params => {


      //get data by query
      this.data.GetEquipmentType(params['id']).subscribe(response => {

        //place response in page
        this.upEquipmentType = response as EquipmentType;

        //place retrieved data in cells
        this.formUpdate.controls['name'].setValue(this.upEquipmentType.name);
        this.formUpdate.controls['description'].setValue(this.upEquipmentType.description);
      })

    })

  }

  UpdateEquipmentType()
  {
    let equipmentType = new EquipmentType();
    equipmentType.name = this.formUpdate.value.name;
    equipmentType.description = this.formUpdate.value.description;

   this.data.updateEquipmentType(this.upEquipmentType.equipmentType_ID,equipmentType).subscribe((response:any) => 
   {

    if(response.statusCode == 200)
    {
      this.router.navigate(['/equipment_type'])
      
    }
    else
    {
      alert("Success!"); 
      this.router.navigate(['/equipment_type'])
    }
   });

  }

}