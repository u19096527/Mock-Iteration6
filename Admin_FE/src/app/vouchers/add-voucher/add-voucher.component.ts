import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Voucher } from 'src/app/shared/voucher';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-voucher',
  templateUrl: './add-voucher.component.html',
  styleUrls: ['./add-voucher.component.scss']
})
export class AddVoucherComponent {

  constructor(private dataService: DataService, private router: Router) { }

  formAddVoucher: FormGroup = new FormGroup
  ({
    percent: new FormControl('', [Validators.required]),
    expiry_Date: new FormControl('', [Validators.required]),
  })
strDay: string = "";
strMonth: string = "";
newDate: string = "";
currentDate = new Date(); 
minimumDate: string ="";


  ngOnInit(): void {
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
    
  }


  CancelAddVoucher(){
    Swal.fire({
      icon: 'error',
      text: 'Add Voucher has been aborted.',
    }).then( (answer) =>{
      if ( (answer.isConfirmed) || (answer.isDismissed) )
      {
        this.router.navigate(['/vouchers'])
      }
    });
  }

  ConfirmAddVoucher() {
    Swal.fire({
      title: 'Are these the correct voucher details?',
      text: "Discount:"+this.formAddVoucher.value.percent +" | Expiry Date: " + this.formAddVoucher.value.expiry_Date,
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) //if user clicked yes
      {
        this.addNewVoucher();
      } else if ( (result.isDenied) || (result.isDismissed))//if user clicked no
      {
        Swal.fire('Please verify that you have entered the correct information.', '', 'info')
      }
    })
  }

  addNewVoucher() {
    this.strDay = "";
    this.strMonth = "";
    //retrieving selected date and converting it to the string format of the DB
    const dateString = this.formAddVoucher.value.expiry_Date;
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

    let newVoucher = new Voucher();
    newVoucher.percent = this.formAddVoucher.value.percent;
    newVoucher.expiry_Date = this.newDate;

    this.dataService.AddNewVoucher(newVoucher).subscribe(result => {
      this.router.navigate(['/vouchers'])
    });
  }



}