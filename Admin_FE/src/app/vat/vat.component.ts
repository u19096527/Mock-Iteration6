import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import{ Vat} from '../shared/vat'
//import { Router } from '@angular/router';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
  styleUrls: ['./vat.component.scss']
})
export class VatComponent implements OnInit {



  constructor(private dService:DataService , private router:Router)
  {}

  VAT:Vat[]=[];

  ngOnInit(): void {
    this.getVAT()
    console.log(this.VAT)
  }

 getVAT(){
   this.dService.GetVAT().subscribe(result  => {
    this.VAT.push(result)
   })

 }//end of get VAT function



}  // end or export