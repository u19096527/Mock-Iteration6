import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Equipment } from 'src/app/shared/equipment';
import { Router } from '@angular/router';
import { EquipmentType } from 'src/app/shared/equipment_type';
import { Module } from 'src/app/shared/module';


@Component({
  selector: 'app-add-lab-equipment',
  templateUrl: './add-lab-equipment.component.html',
  styleUrls: ['./add-lab-equipment.component.scss']
})
export class AddLabEquipmentComponent {

//All the things we going
Modules :Module[]=[];
EquipmentTypes :EquipmentType[]=[];


constructor(private data:DataService, private route:Router){}

  formAdd: FormGroup = new FormGroup
    ({
      name: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required]),
      Quantity: new FormControl('', [Validators.required]),
      PriceAmount: new FormControl('', [Validators.required]),
      Image: new FormControl('', [Validators.required])
    })

ngOnInit(): void {
  
  this.GetAllEquipmentTypes()
  this.GetAllModules()
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



AddLabEquipment()
{
//Getting Date
const currentDate = new Date();
const formatDate =`${currentDate.toLocaleDateString()}`;
//Getting the date without time
const captureToday = new Date();


//Creating new equipment
let equi = new Equipment();
  equi.EquipmentName = this.formAdd.value.name;//works
  equi.Description = this.formAdd.value.Description;//works
  equi.Quantity_On_Hand= this.formAdd.get('Quantity')?.value;
  equi.PriceAmount= this.formAdd.get('PriceAmount')?.value;
  equi.Date_Last_Updated = formatDate;//works
  equi.Date = captureToday;//works
  equi.EquipmentTypeID = Number(this.EquipmentTypeOption);
  equi.module_ID = Number(this.selectedOption);
  equi.Image = this.formAdd.value.Image;



  this.data.AddEquipment(equi).subscribe((response:any) =>{
     if(response.statuscode ==200) { this.route.navigate(['/'])}
     else("Success");
     this.route.navigate(['/lab_equipment'])
  })
  console.log(this.AddLabEquipment)
}//end of add equipment






//Getting the options of the dropdown
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

}//end of class

