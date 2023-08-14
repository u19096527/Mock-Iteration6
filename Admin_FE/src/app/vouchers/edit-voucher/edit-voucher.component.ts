import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Voucher } from 'src/app/shared/voucher';

@Component({
  selector: 'app-edit-voucher',
  templateUrl: './edit-voucher.component.html',
  styleUrls: ['./edit-voucher.component.scss']
})
export class EditVoucherComponent {

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) { }

  //Creating the form 
  originalVoucher: Voucher = new Voucher();
  currentDate = new Date(); 
  minimumDate: string ="";
  newDate: string = "";

  strDay: string = "";
  strMonth: string ="";

  formEditVoucher: FormGroup = new FormGroup({
    percent: new FormControl('', [Validators.required]),
    expiry_Date: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {

    //get id
    this.activatedRoute.params.subscribe(params => {


      //get data by query
      this.dataService.GetSelectedVoucher(params['id']).subscribe(response => {

        //place response in page
        this.originalVoucher = response as Voucher;

        //setting up the current date to limit the date picker in the format datepicker takes (yyyy-MM-dd)
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth() + 1; // Months are zero-based, so you need to add 1
        const day = this.currentDate.getDate();
        if (day < 10){
          this.strDay = "0"+ day.toString();
        }
        else {
          this.strDay = day.toString()
        };

        if (month < 10) {
          this.strMonth = "0"+ month.toString();
        }
        else {
          this.strMonth = month.toString();
        }
        this.minimumDate = year.toString() +"-"+ this.strMonth+"-"+ this.strDay;
        console.log(this.minimumDate);
        console.log(this.strDay);
        console.log(day.toString());
      })



    })

  }

  editAVoucher()
  {
    this.strDay = "";
    this.strMonth = "";
    //retrieving selected date and converting it to the string format of the DB
    const dateString = this.formEditVoucher.value.expiry_Date;
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    if (day < 10){
      this.strDay = "0"+ day.toString();
    }
    else {
      this.strDay = day.toString()
    };

    if (month < 10) {
      this.strMonth = "0"+ month.toString();
    }
    else {
      this.strMonth = month.toString();
    }

    this.newDate = this.strDay +"-"+ this.strMonth +"-"+ year.toString();


    let editedVoucher = new Voucher();
    editedVoucher.percent = this.originalVoucher.percent;
    editedVoucher.expiry_Date = this.newDate; 

   this.dataService.UpdateAVoucher(this.originalVoucher.voucher_ID, editedVoucher).subscribe((response:any) => {
      this.router.navigate(['/vouchers'])

   });

  }



}