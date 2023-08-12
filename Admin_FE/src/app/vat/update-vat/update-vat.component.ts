import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router , ActivatedRoute} from '@angular/router';
import { Vat } from 'src/app/shared/vat';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-update-vat',
  templateUrl: './update-vat.component.html',
  styleUrls: ['./update-vat.component.scss']
})
export class UpdateVatComponent implements OnInit {

  constructor(private dService:DataService , private router:Router, private activated:ActivatedRoute){}


  formUpdate:FormGroup=new FormGroup({
    percent:new FormControl('',[Validators.required])
  })
  VAT:Vat[]=[];

  ngOnInit(): void {
    this.formUpdate.addControl('percent', new FormControl());
      this.dService.GetVAT().subscribe(Response=>
        {
          this.VAT.push(Response);
         console.log(this.VAT[0].percent);

         // this.formUpdate.controls['name'].setValue(this.upSupplier.sup_Name);
         this.formUpdate.controls['percent'].setValue(this.VAT[0].percent);
        });


  }



UpdateVat()
{
  const percentValue = this.formUpdate.get('percent')?.value;

  let editedVAT = new Vat();
  editedVAT.percent = percentValue;
  editedVAT.vaT_Id = 1;
  console.log(percentValue);
  this.dService.EditVAT(editedVAT).subscribe((response:any)=>
  {
    if(response.statusCode == 200)
    {
      this.router.navigate(['/vat'])
    }
    else
    {
      alert("Success!");
      this.router.navigate(['/vat'])
    }
  });

}
}