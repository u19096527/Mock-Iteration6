import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { Equipment } from 'src/app/shared/equipment';
import { Router,ActivatedRoute } from '@angular/router';
import { EquipmentType } from 'src/app/shared/equipment_type';
import { Module } from 'src/app/shared/module';
import { Equi } from 'src/app/shared/equipment2';

@Component({
  selector: 'app-update-lab-equipment',
  templateUrl: './update-lab-equipment.component.html',
  styleUrls: ['./update-lab-equipment.component.scss']
})
export class UpdateLabEquipmentComponent {
  selectedOption: string =""
  onOptionChange(target: any) {
    const value = target.value; // Extract the selected value
    this.selectedOption = value;
    console.log(this.selectedOption);
  }
  EquipmentTypeOption:string ="";
  onEquipmentType(target:any)
  {
    const value = target.value;
    this.EquipmentTypeOption =value;
    console.log(this.EquipmentTypeOption);
  }
//All the things we going
Modules :Module[]=[];
EquipmentTypes :EquipmentType[]=[];
SearchModules :Module[]=[];

constructor(private data:DataService, private route:Router,
  private activated:ActivatedRoute){}

  formUpdate: FormGroup = new FormGroup
    ({
      name: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required]),
      Quantity: new FormControl('', [Validators.required]),
      PriceAmount: new FormControl('', [Validators.required]),
      Image:new FormControl('', [Validators.required]),

    })

UpdateEquipment:Equi= new Equi();

ngOnInit(): void {
  this.GetAllEquipmentTypes();
  this.GetAllModules();

this.activated.params.subscribe(params=>{
  this.data.GetEquipmentByid(params['id']).subscribe(res=>
    {
      this.UpdateEquipment=res as Equi;

      //add data to controls
      this.formUpdate.controls['name'].setValue(this.UpdateEquipment.name);
      this.formUpdate.controls['Description'].setValue(this.UpdateEquipment.description);
      this.formUpdate.controls['Image'].setValue(this.UpdateEquipment.image);
      this.formUpdate.controls['Quantity'].setValue(this.UpdateEquipment.quantity_On_Hand);
      this.formUpdate.controls['PriceAmount'].setValue(this.UpdateEquipment.priceAmount);


    })
})

}
UpdateLabEquipment()
{
  const currentDate = new Date();
const formatDate =`${currentDate.toLocaleDateString()}`;
//Getting the date without time
const captureToday = new Date();

  let upequipment = new Equipment();
  upequipment.EquipmentName = this.formUpdate.value.name;//works
  upequipment.Description = this.formUpdate.value.Description;//works
  upequipment.Quantity_On_Hand= this.formUpdate.get('Quantity')?.value;
  upequipment.PriceAmount= this.formUpdate.get('PriceAmount')?.value;
  upequipment.Date_Last_Updated = formatDate; //works
  upequipment.Date = captureToday;//works
  upequipment.EquipmentTypeID = Number(this.EquipmentTypeOption);
  upequipment.module_ID = Number(this.selectedOption);
  upequipment.Image = this.formUpdate.value.Image;

console.log(upequipment);
  this.data.EditEquipment(this.UpdateEquipment.equipment_ID,upequipment).subscribe((response:any)=>{
    if(response.statuscode ==200) { this.route.navigate(['/'])}
    else("Success");
    this.route.navigate(['/lab_equipment'])
  })

}
GetAllEquipmentTypes()
{
   this.data.GetAllEquipmentTypes().subscribe(result=>{
    let TypesList:any[] = result
    TypesList.forEach((element)=>{
      this.EquipmentTypes.push(element)
    });
   })
}

GetAllModules()
{  this.data.GetModules().subscribe(result =>
  {
    let moduleList: any[] = result
    moduleList.forEach((element) =>{
      this.Modules.push(element)
    });
  })
}
}


